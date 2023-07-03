import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./HomePage.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate("/signin")
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
                        <span>{`Welcome, Home`}</span>
                    </div>

                    <div className="home_page_field_container">

                        <TextField
                            sx={{
                                input: { color: 'white' },
                                width: "100%"
                            }}
                            color="warning"
                            id="standard-basic"
                            label="Salutaion"
                            variant="standard"
                            focused
                        />
                        <TextField
                            sx={{
                                input: { color: 'white' },
                                width: "100%"
                            }}
                            color="warning"
                            id="standard-basic"
                            label="First Name"
                            variant="standard"
                            focused
                        />
                        <TextField
                            sx={{
                                input: { color: 'white' },
                                width: "100%"
                            }}
                            color="warning"
                            id="standard-basic"
                            label="Last Name"
                            variant="standard"
                            focused
                        />
                        <TextField
                            sx={{
                                input: { color: 'white' },
                                width: "100%"
                            }}
                            color="warning"
                            id="standard-basic"
                            label="Email Address"
                            variant="standard"
                            focused
                        />
                        <TextField
                            sx={{
                                input: { color: 'white' },
                                width: "100%"
                            }}
                            color="warning"
                            id="standard-basic"
                            label="Mobile Phone Number"
                            variant="standard"
                            focused
                        />

                    </div>
                    <div className="btn_container2">
                        <Button
                            sx={{ width: "100%", bgcolor: "#f95f62" }}
                            variant="contained"
                            onClick={logoutHandler}
                        >LOGOUT
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;
