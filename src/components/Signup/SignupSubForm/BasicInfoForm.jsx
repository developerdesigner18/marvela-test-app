import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const BasicInfoForm = ({ setuserData }) => {
  return (
    <div>
      {/* <div>
        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          //   value={age}
          //   onChange={handleChange}
          label="Age"
          sx={{ width: "100%", color: "white !important" }}
          defaultValue={10}
          focused
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </div> */}
      <TextField
        label="First Name"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            fname: e.target.value,
          }))
        }
      />
      <TextField
        label="Last Name"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            lname: e.target.value,
          }))
        }
      />
      <TextField
        label="Email"
        variant="standard"
        focused
        type="email"
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            email: e.target.value,
          }))
        }
      />
      <TextField
        label="Mobile Phone Number"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            phoneNumber: e.target.value,
          }))
        }
      />
    </div>
  );
};

export default BasicInfoForm;
