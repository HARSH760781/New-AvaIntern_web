import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CircularProgress,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, name, email, mobile, courseName } = location.state || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!amount || !name || !email || !mobile) {
      toast.error("Invalid payment details. Please fill the form again.");
      navigate("/enroll");
    }
  }, [amount, name, email, mobile, navigate]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const initiatePayment = async () => {
    setLoading(true);

    try {
      // Load Razorpay script
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        throw new Error("Failed to load Razorpay script");
      }

      // Create a Razorpay order
      const backend_url = import.meta.env.VITE_BACKEND_URL;

      const orderAmount = parseFloat(amount.replace("Rs ", ""));
      // const orderAmount = 1;
      const response = await fetch(`${backend_url}/create-payment-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderAmount,
          customerName: name,
          customerEmail: email,
          customerPhone: mobile,
        }),
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        console.error("Failed to parse JSON:", text);
        throw new Error("Invalid JSON response from server");
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to create payment order");
      }

      // Initialize Razorpay payment
      const options = {
        key: "rzp_live_7bDrhYggmlkcNc", // Replace with your Razorpay Key ID
        amount: data.amount,
        currency: data.currency,
        order_id: data.id,
        name: courseName,
        description: "Payment for course enrollment",
        prefill: {
          name,
          email,
          contact: mobile,
        },
        handler: function (response) {
          toast.success("Payment successful!");
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          navigate("/success", {
            state: {
              transactionData: {
                courseName: courseName,
                coursePrice: amount,
                paymentDate: new Date().toLocaleDateString(), // You can use your actual date logic
                paymentTime: new Date().toLocaleTimeString(), // You can use your actual time logic
              },
            },
          });
        },
        theme: {
          color: "#1976d2",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response) {
        const errorMessage =
          response.error.description || "Payment failed. Please try again.";
        toast.error(errorMessage);

        // Navigate to the failure page and pass the error message
        navigate("/payment-failure", {
          state: {
            errorMessage: errorMessage,
            courseName: courseName,
            amount: amount,
            name: name,
            email: email,
            mobile: mobile,
          },
        });
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Payment failed: ${error.message}`);

      // Navigate to the failure page in case of any error
      navigate("/payment-failure", {
        state: {
          errorMessage: error.message,
          courseName: courseName,
          amount: amount,
          name: name,
          email: email,
          mobile: mobile,
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Card
        sx={{ maxWidth: 400, width: "100%", borderRadius: 2, boxShadow: 3 }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Payment Page
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Amount : {amount}
            {/* Amount : 1 */}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Course : <b>{courseName}</b>
          </Typography>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              onClick={initiatePayment}
              disabled={loading}
              sx={{ padding: "12px 24px", fontSize: "16px" }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Proceed to Payment"
              )}
            </Button>
          </Grid>
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default PaymentPage;
