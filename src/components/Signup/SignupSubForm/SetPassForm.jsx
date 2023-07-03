import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const SetPassForm = ({ setuserData, userData }) => {
  return (
    <div>
      <label
        style={{
          wordBreak: "break-all",
          color: "#c1c1c1",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        Enter a password to login
      </label>
      <br />
      <br />
      <TextField
        label="Password"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            password: e.target.value,
          }))
        }
      />
      <Typography
        style={{
          wordBreak: "break-all",
          color: "#c1c1c1",
          fontSize: "14px",
          marginBottom: "20px",
          marginTop: "-15px",
        }}
      >
        Your password must be atleast 8 charectors and must have atleats 1
        uppercase and spacial symbol
      </Typography>
      <TextField
        label="Confirm Password"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            conPassword: e.target.value,
          }))
        }
      />

      <Button
        // onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
        variant="contained"
        sx={{ background: "#00A6FF" }}
        fullWidth
      >
        SIGNUP
      </Button>
    </div>
  );
};

export default SetPassForm;
