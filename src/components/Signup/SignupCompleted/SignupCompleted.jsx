import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignupCompleted = () => {
  const naviaget = useNavigate();
  return (
    <div>
      <Typography variant="h5" sx={{ color: "#504ed3", marginTop: "60px" }}>
        Sign Up Completed
      </Typography>
      <label
        style={{
          wordBreak: "break-all",
          color: "#c1c1c1",
          fontSize: "14px",
          marginBottom: "20px",
        }}
      >
        Whenever you sign in, you'll be pramoted for a varification code.
      </label>
      <br />
      <br />
      <br />
      <Button
        onClick={() => naviaget("/signin")}
        variant="contained"
        sx={{ background: "#00A6FF" }}
        fullWidth
      >
        SIGN IN
      </Button>
    </div>
  );
};

export default SignupCompleted;
