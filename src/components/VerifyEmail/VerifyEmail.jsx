import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { validEmail } from "../Signin/Signin";
import axios from "axios";

const VerifyEmail = () => {

    const navigate = useNavigate();

    const [otp, setOtp] = useState("")

    const verifyOtpHandler = async () => {
        try {

            if (!validEmail || !otp) return;
            const body = {
                email: validEmail,
                otp
            }

            const url = `${process.env.REACT_APP_BASE_URL}/users/verifyOtpLogin`

            const res = await axios.post(url, body);

            localStorage.setItem("Token", JSON.stringify(res.data.token));

            navigate("/homePage");

        } catch (error) {
            console.log(error);
        }

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
                        id="standard-basic"
                        label="Enter verificaton code below"
                        variant="standard"
                        focused
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
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
