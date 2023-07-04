import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { findEmptyFields } from "../../../utils/Helper";
import { toast } from "react-toastify";

const BasicInfoForm = ({ setuserData, userData, setActiveStep }) => {
  const handleNext = () => {
    const { salutation, firstname, lastname, email, mobilenumber } = userData;
    const emptyField = findEmptyFields({
      salutation,
      firstname,
      lastname,
      email,
      mobilenumber,
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
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "1.4375em",
          color: " #ffba5c",
          textAlign: "start",
          marginBottom: "5px",
        }}
      >
        Salutation
      </Typography>
      <select
        type="text"
        className="input_select_filed_style"
        value={userData.salutation}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            salutation: e.target.value,
          }))
        }
      >
        <option value={"Mr."} style={{ color: "black" }}>
          Mr.
        </option>
        <option value={"Miss."} style={{ color: "black" }}>
          Miss.
        </option>
        <option value={"Mrs."} style={{ color: "black" }}>
          Mrs.
        </option>
      </select>
      <TextField
        label="First Name"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        value={userData.firstname}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            firstname: e.target.value,
          }))
        }
      />
      <TextField
        label="Last Name"
        variant="standard"
        focused
        sx={{ width: "100%", marginBottom: "20px" }}
        value={userData.lastname}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            lastname: e.target.value,
          }))
        }
      />
      <TextField
        label="Email"
        variant="standard"
        focused
        type="email"
        sx={{ width: "100%", marginBottom: "20px" }}
        value={userData.email}
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
        value={userData.mobilenumber}
        onChange={(e) =>
          setuserData((prevState) => ({
            ...prevState,
            mobilenumber: e.target.value,
          }))
        }
      />

      <div>
        <Button
          onClick={
            () => handleNext()
            // setActiveStep((prevActiveStep) => prevActiveStep + 1)
          }
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

export default BasicInfoForm;
