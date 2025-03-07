import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Button, Card, CardContent, Grid } from "@mui/material";

const PaymentFailure = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { errorMessage, courseName, amount, name, email, mobile } =
    location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/enroll", {
        state: {
          courseName: courseName,
          amount: amount,
          name: name,
          email: email,
          mobile: mobile,
        },
      });
    }, 8000); // Redirect after 8 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigate, courseName, amount, name, email, mobile]);

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
          <Typography variant="h5" gutterBottom align="center" color="error">
            Payment Failed
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary">
            {errorMessage}
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            You will be redirected to the enrollment form in 8 seconds...
          </Typography>
          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                navigate("/enroll", {
                  state: {
                    courseName: courseName,
                    amount: amount,
                    name: name,
                    email: email,
                    mobile: mobile,
                  },
                })
              }
            >
              Go Back Now
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentFailure;
