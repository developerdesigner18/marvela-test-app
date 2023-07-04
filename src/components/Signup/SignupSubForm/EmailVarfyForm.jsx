import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const EmailVarfyForm = ({ setuserData, userData, setActiveStep }) => {
  const OtpValidation = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/users/verifyOtp`, {
        email: userData.email,
        otp: userData.otp,
      })
      .then((response) => {
        console.log(response);
        toast.success("Mail varify successfully");
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
        console.log(err);
      });
  };
  const ResendOtp = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/users/sendOtp`, {
        email: userData.email,
      })
      .then((response) => {
        toast.success(`OTP Successfully send on your email`);
      })
      .catch((err) => {
        toast.error("Somthing went wrong please try again");
        console.log(err);
      });
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
        onClick={OtpValidation}
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
          cursor: "pointer",
        }}
        onClick={ResendOtp}
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
