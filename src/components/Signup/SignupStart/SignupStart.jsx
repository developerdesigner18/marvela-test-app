import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SignupStart = () => {

    const navigate = useNavigate();

    const beginSignUpHandler = () => {
        navigate("/signup");
    }

    return (
        <>
            <div className="home_page_header">
                <MenuIcon sx={{ color: '#3765b1' }} fontSize="large" />
                <span>Logo</span>
            </div>

            <div className="home_page">
                <div className="home_page_main">
                    <div className="home_page_heading">
                        <span>{`LOGO`}</span>
                    </div>

                    <div style={{ padding: "0" }} className="home_page_field_container">
                        <div className="img_container">
                            <img src="/assets/signupLogo.jpg" alt="" />
                        </div>

                        <div className="heading2">
                            <span style={{ color: "#ffba5c" }} className="heading2_main">Sign Up</span>
                            <span className="heading2_sub">To create a new account, press the button below</span>
                        </div>

                    </div>
                    <div className="btn_container2">
                        <Button
                            sx={{ width: "100%", bgcolor: "#49a7e8" }}
                            variant="contained"
                            onClick={beginSignUpHandler}
                        >
                            BEGIN SIGN UP
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SignupStart;
