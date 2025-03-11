import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Use location hook to access the state
import {
  Typography,
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material"; // Importing a checkmark icon
import { useSpring, animated } from "react-spring"; // For smooth animations

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access the location and state data

  const { transactionData } = location.state || {}; // Get transactionData from location state

  // console.log("Data:", transactionData);
  // Animation using react-spring
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const scaleUp = useSpring({
    transform: "scale(1.1)",
    from: { transform: "scale(0)" },
    config: { tension: 200, friction: 12 },
  });

  // Redirect after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home page after 8 seconds
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Display a fallback if transactionData is not available
  if (!transactionData) {
    return (
      <Typography variant="h6" color="error">
        Payment data not found.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Box
        sx={{
          padding: { xs: "20px", sm: "30px" },
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <animated.div style={fadeIn}>
          <Typography variant="h4" gutterBottom>
            Payment Successful!
          </Typography>
        </animated.div>

        <animated.div style={scaleUp}>
          <CheckCircle
            sx={{ fontSize: "60px", color: "#4caf50", marginBottom: "20px" }}
          />
        </animated.div>

        <Typography
          variant="body1"
          sx={{ marginBottom: "20px", fontSize: "1.1em" }}
        >
          Thank you for enrolling in the course. You will receive a confirmation
          email shortly.
        </Typography>

        <Typography variant="body2" sx={{ fontStyle: "italic", color: "#888" }}>
          If you have any questions, feel free to reach out to support.
        </Typography>

        <Grid container spacing={3} sx={{ marginTop: "30px" }}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="transaction details table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Course Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Date of Payment</TableCell>
                    <TableCell align="right">Time of Payment</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {transactionData.courseName}
                    </TableCell>
                    <TableCell align="right">
                      {transactionData.coursePrice}
                    </TableCell>
                    <TableCell align="right">
                      {transactionData.paymentDate}
                    </TableCell>
                    <TableCell align="right">
                      {transactionData.paymentTime}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
          onClick={() => navigate("/")} // Navigate to home
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  );
};

export default SuccessPage;
