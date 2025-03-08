import React from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BrokenImageIcon from "@mui/icons-material/BrokenImage"; // Broken link icon
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied"; // Sad face icon

const NotFound = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: theme.palette.background.default,
      }}
    >
      {/* Animated 404 Text with Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <BrokenImageIcon
            sx={{
              fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
              color: theme.palette.error.main,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "6rem", sm: "8rem", md: "10rem" },
              fontWeight: "bold",
              color: theme.palette.error.main,
              lineHeight: 1,
            }}
          >
            404
          </Typography>
        </Box>
      </motion.div>

      {/* Error Message with Emoji */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Typography
          variant="h4"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          Oops! Page Not Found{" "}
          <SentimentVeryDissatisfiedIcon fontSize="large" />
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: theme.palette.text.secondary,
            maxWidth: "500px",
          }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
      </motion.div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 2,
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Go Back to Home
        </Button>
      </motion.div>
    </Container>
  );
};

export default NotFound;
