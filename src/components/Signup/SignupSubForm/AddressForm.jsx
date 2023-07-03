import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const AddressForm = ({ setuserData, userData }) => {
  return (
    <div>
      <TextField
        label="Address Line 1"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            address1: e.target.value,
          }))
        }
      />
      <TextField
        label="Address Line 1"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            address2: e.target.value,
          }))
        }
      />
      <TextField
        label="City"
        variant="standard"
        focused
        type="email"
        sx={{ width: "100%", marginBottom: "20px" }}
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
    </div>
  );
};

export default AddressForm;
