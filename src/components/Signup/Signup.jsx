import React, { useState } from "react";
import "./Signup.css";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import { Button, Typography } from "@mui/material";
import BasicInfoForm from "./SignupSubForm/BasicInfoForm";
import AddressForm from "./SignupSubForm/AddressForm";
import EmailVarfyForm from "./SignupSubForm/EmailVarfyForm";
import SetPassForm from "./SignupSubForm/SetPassForm";
import SignupCompleted from "./SignupCompleted/SignupCompleted";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 20,
  height: 20,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: "#FFBA5C",
  }),
  ...(ownerState.completed && {
    background: "#77D353",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: "",
    2: "",
    3: "",
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const steps = ["Basic Info", "Address", "Varify Email", "Set Password"];

const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setuserData] = useState({
    salutation: "Mr.",
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    add1: "",
    add2: "",
    city: "",
    country: "",
    image: "",
    password: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="signup_container">
      <div className="signup_main_box">
        <Typography
          variant="h5"
          sx={{ color: "#FFBA5C", marginBottom: "30px", textAlign: "end" }}
        >
          Logo
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: "#FFBA5C", marginBottom: "30px" }}
        >
          Sign Up
        </Typography>
        <Stack sx={{ width: "100%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            //   connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Typography
                    sx={{
                      color: "#c1c1c1",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
        <Typography variant="h5" sx={{ color: "#504ed3", margin: "30px auto" }}>
          {steps[activeStep]}
        </Typography>

        {activeStep == 0 ? (
          <BasicInfoForm
            setuserData={setuserData}
            userData={userData}
            setActiveStep={setActiveStep}
          />
        ) : activeStep == 1 ? (
          <AddressForm
            setuserData={setuserData}
            userData={userData}
            setActiveStep={setActiveStep}
          />
        ) : activeStep == 2 ? (
          <EmailVarfyForm
            setuserData={setuserData}
            userData={userData}
            setActiveStep={setActiveStep}
          />
        ) : activeStep == 3 ? (
          <SetPassForm
            setuserData={setuserData}
            userData={userData}
            setActiveStep={setActiveStep}
          />
        ) : (
          <SignupCompleted />
        )}
      </div>
    </div>
  );
};

export default Signup;
