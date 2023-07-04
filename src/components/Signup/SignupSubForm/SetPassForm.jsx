import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

const SetPassForm = ({ setuserData, userData, setActiveStep }) => {
  const handleNext = () => {
    if (userData.password === userData.conPassword) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      toast.error("Confirm Password does not match");
    }
  };
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
        type="password"
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
        type="password"
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
        onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
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
