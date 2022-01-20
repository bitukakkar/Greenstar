import React from "react";
import Button from "@mui/material/Button";
import "./ButtonCustom.scss";

const ButtonCustom = (props) => {
  const { className, buttontext } = props;
  return (
    <Button className={`commonBtn ${className}`} disableElevation>
      {buttontext}
    </Button>
  );
};

export default ButtonCustom;
