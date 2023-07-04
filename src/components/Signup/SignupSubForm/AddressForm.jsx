import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { findEmptyFields } from "../../../utils/Helper";
import { toast } from "react-toastify";
import axios from "axios";

const AddressForm = ({ setuserData, userData, setActiveStep }) => {
  const handleNext = () => {
    const { add1, add2, city, country, image } = userData;
    const emptyField = findEmptyFields({
      add1,
      add2,
      city,
      country,
      image,
    });
    if (emptyField.length > 0) {
      toast.error(`Please fill ${emptyField[0]} field`);
    } else {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/users/sendOtp`, {
          email: userData.email,
        })
        .then((response) => {
          console.log(response);
          toast.success(`OTP Successfully send on your email`);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch((err) => {
          toast.error("Somthing went wrong please try again");
          console.log(err);
        });
    }
  };
  return (
    <div>
      <TextField
        label="Address Line 1"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        value={userData.add1}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            add1: e.target.value,
          }))
        }
      />
      <TextField
        label="Address Line 1"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        value={userData.add2}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            add2: e.target.value,
          }))
        }
      />
      <TextField
        label="City"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        value={userData.city}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            city: e.target.value,
          }))
        }
      />
      <TextField
        label="Country"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        value={userData.country}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            country: e.target.value,
          }))
        }
      />
      <div>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "1.4375em",
            color: " #ffba5c",
            textAlign: "start",
            marginBottom: "10px",
          }}
        >
          Upload photo of Address
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <label className="file_input_holder" htmlFor={"image"}>
            UPLOAD
          </label>
          <Box sx={{ width: "50%" }}>
            {userData.image && (
              <label
                style={{
                  wordBreak: "break-all",
                  color: "#c1c1c1",
                  fontSize: "14px",
                }}
              >
                {userData.image.name}
              </label>
            )}
          </Box>
        </Box>
        <input
          type="file"
          className="file_actual_input"
          id={"image"}
          onChange={(e) =>
            setuserData((prevState) => ({
              ...prevState,
              image: e.target.files[0],
            }))
          }
        />
      </div>
      <br />
      <div>
        <Button
          onClick={handleNext}
          variant="contained"
          sx={{ background: "#00A6FF" }}
          fullWidth
        >
          PROCEES
        </Button>
        <br />
        <br />
        <Button
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          variant="contained"
          sx={{ background: "#0E45A1" }}
          fullWidth
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default AddressForm;
