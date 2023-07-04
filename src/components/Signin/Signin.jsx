import React, { useState } from "react";
import "./Signin.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export let validEmail;

const Signin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInHandler = async () => {
        try {

            if (!email || !password) return;
            const body = {
                email,
                password
            }

            console.log("body", body);

            const url = `${process.env.REACT_APP_BASE_URL}/users/signIn`

            const res = await axios.post(url, body);

            validEmail = email;

            navigate('/verifyEmail');

        } catch (error) {
            console.log(error);
        }

    }

    const createAccountHandler = () => {
        navigate('/signup');
    }

    return (
        <div className="container">
            <div className="main">
                <div className="heading1">
                    <span>Sign In</span>
                </div>

                <div className="img_container">
                    <img src="/assets/SigninBanner.jpg" alt="" />
                </div>

                <div className="heading2">
                    <span className="heading2_main">Sign In</span>
                    <span className="heading2_sub">Sign in using your online account</span>
                </div>

                <div className="field_container">

                    <TextField
                        sx={{
                            input: { color: 'white' },
                            width: "100%"
                        }}
                        id="standard-basic"
                        label="Email Address"
                        variant="standard"
                        focused
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />


                    <TextField
                        sx={{
                            input: { color: 'white' },
                            width: "100%"
                        }}
                        id="standard-basic"
                        label="Password"
                        type="password"
                        variant="standard"
                        focused
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <div className="btn_container">
                        <Button sx={{ width: "100%", height: "100%" }} variant="contained" onClick={signInHandler}>SIGN IN</Button>
                    </div>

                    <div className="span_field_container">
                        <span>Forgot Password?</span>
                    </div>

                </div>
                <div className="btn_container2">
                    <Button
                        sx={{ width: "100%", height: "100%", bgcolor: "#0e45a1" }}
                        variant="contained"
                        onClick={createAccountHandler}
                    >
                        DON'T HAVE AN ACCOUNT
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Signin;
