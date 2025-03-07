import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Login from "./Login"; // Import the Login component
import Signup from "./SignUp"; // Import the Signup component

function LoginSignup() {
  const [tabValue, setTabValue] = React.useState(0); // 0 for Login, 1 for Signup
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: isMobile ? 2 : 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: isMobile ? "100%" : "400px",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ mb: 3 }}
        >
          <Tab label="Login" />
          <Tab label="Signup" />
        </Tabs>

        {/* Render Login or Signup component based on the selected tab */}
        {tabValue === 0 ? <Login /> : <Signup />}
      </Paper>
    </Box>
  );
}

export default LoginSignup;
