import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {

    const navigate = useNavigate();

    const verifyOtpHandler = () => {
        navigate("/homePage");
    }

    const cancelVerificationHandler = () => {
        navigate(-1);
    }

    return (
        <div className="container">
            <div className="main">
                <div className="heading1">
                    <span>Two-Factor Authentication</span>
                </div>

                <div className="img_container">
                    <img src="/assets/SigninBanner.jpg" alt="" />
                </div>

                <div className="heading2">
                    <span className="heading2_main">Verify Your Email</span>
                    <span className="heading2_sub">{`A 8 digit verification code was sent to email check your Spam or Junk folder`}</span>
                </div>

                <div className="field_container">

                    <TextField
                        sx={{
                            input: { color: 'white' },
                            width: "100%"
                        }}
                        color="warning"
                        id="standard-basic"
                        label="Enter verificaton code below"
                        variant="standard"
                        focused
                    />


                    <div className="btn_container">
                        <Button
                            sx={{ width: "100%" }}
                            variant="contained"
                            onClick={verifyOtpHandler}
                        >
                            VERIFY CODE
                        </Button>
                    </div>

                    <div className="span_field_container">
                        <span className="resend_otp">Resend Code</span>
                    </div>

                </div>
                <div className="btn_container2">
                    <Button
                        sx={{ width: "100%", bgcolor: "#f95f62" }}
                        variant="contained"
                        onClick={cancelVerificationHandler}
                    >CANCEL
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default VerifyEmail;
