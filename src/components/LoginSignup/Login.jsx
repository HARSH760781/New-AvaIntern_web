import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log("Login Form Data:", data);
    // Add your API call or form handling logic here
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Login
      </Typography>
      <TextField
        fullWidth
        label="Email / Mobile Number"
        name="email"
        type="email"
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        required
        sx={{ mb: 2 }}
      />
      <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
