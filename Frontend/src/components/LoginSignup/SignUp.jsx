import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Signup() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      password: formData.get("password"),
    };

    const spreadsheetId = "1qwnrCr_PFuiwq7vazf0HP4Hpf-5B_akZUpMrVDWyVzk"; // Replace with your Google Sheet ID
    const range = "Login/SignUp Database!A:A"; // Replace with your sheet name and range
    const apiKey = "AIzaSyD5nxAxdzas_VUPoEYEwuEPq4DgAbEHYDA"; // Replace with your API key

    const values = [[data.name, data.email, data.mobile, data.password]];

    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW&key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values,
          }),
        }
      );

      if (response.ok) {
        console.log("Data saved successfully");
        alert("Signup successful! Data saved to Google Sheet.");
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Signup
      </Typography>
      <TextField fullWidth label="Name" name="name" required sx={{ mb: 2 }} />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        required
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Mobile Number"
        name="mobile"
        type="number"
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
        Signup
      </Button>
    </Box>
  );
}

export default Signup;
