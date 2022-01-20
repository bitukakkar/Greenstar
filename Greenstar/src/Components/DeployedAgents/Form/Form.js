import React from "react";
import { useStyles } from "../styles";
import { TextField, Button } from "@mui/material";
import clsx from "clsx";
const Form = () => {
  const classes = useStyles();

  return (
    <div className={classes.maincontainer}>
      <div className="agentDiployed">
        <form className={clsx(classes.topForm, classes.dFlex)}>
          <div className="fldWrap">
            <TextField
              required
              id="standard-required"
              placeholder="Fault ID..."
              variant="standard"
            />
          </div>
          <div className="fldWrap">
            <TextField
              required
              id="standard-required"
              placeholder="Agent Name..."
              variant="standard"
            />
          </div>
          <div className="fldWrap">
            <TextField
              required
              id="standard-required"
              placeholder="Agent ID..."
              variant="standard"
            />
          </div>
          <div className="fldWrap">
            <TextField
              required
              id="standard-required"
              placeholder="Agent Service"
              variant="standard"
            />
          </div>
          <div className="fldWrap bdr0">
            <TextField
              required
              id="standard-required"
              placeholder="Agent Type"
              variant="standard"
            />
          </div>
          <div className="click_area">
            <span>Clear</span>
            <Button className="deploy_btn">Search</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
