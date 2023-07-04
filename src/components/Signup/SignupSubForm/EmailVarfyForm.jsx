import { Button, TextField, Typography } from "@mui/material";
import React from "react";

const EmailVarfyForm = ({ setuserData, userData, setActiveStep }) => {
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
        {`A 6-digt verification code was sent to ${userData.email} Check your spam or junk folder`}
      </label>
      <br />
      <br />
      <br />
      <TextField
        label="Enter varification code bellow"
        variant="standard"
        focused
        type="number"
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            otp: e.target.value,
          }))
        }
      />
      <Button
        onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
        variant="contained"
        sx={{ background: "#00A6FF" }}
        fullWidth
      >
        VERIFY CODE
      </Button>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "1.4375em",
          color: " #ffba5c",
          textAlign: "end",
          margin: "10px 0px",
        }}
      >
        Resend Code
      </Typography>

      <br />
      <br />
      <Button
        onClick={() => setActiveStep(0)}
        variant="contained"
        sx={{ background: "#F95F62" }}
        fullWidth
      >
        START OVER
      </Button>
    </div>
  );
};

export default EmailVarfyForm;
