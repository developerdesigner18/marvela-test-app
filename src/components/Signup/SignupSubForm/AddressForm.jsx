import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { findEmptyFields } from "../../../utils/Helper";
import { toast } from "react-toastify";

const AddressForm = ({ setuserData, userData, setActiveStep }) => {
  const handleNext = () => {
    const { add1, add2, city, country, addImage } = userData;
    const emptyField = findEmptyFields({
      add1,
      add2,
      city,
      country,
      addImage,
    });
    if (emptyField.length > 0) {
      toast.error(`Please fill ${emptyField[0]} field`);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    console.log(emptyField);
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
        type="email"
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
          <label className="file_input_holder" htmlFor={"addImage"}>
            UPLOAD
          </label>
          <Box sx={{ width: "50%" }}>
            {userData.addImage && (
              <label
                style={{
                  wordBreak: "break-all",
                  color: "#c1c1c1",
                  fontSize: "14px",
                }}
              >
                {userData.addImage.name}
              </label>
            )}
          </Box>
        </Box>
        <input
          type="file"
          className="file_actual_input"
          id={"addImage"}
          onChange={(e) =>
            setuserData((prevState) => ({
              ...prevState,
              addImage: e.target.files[0],
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
