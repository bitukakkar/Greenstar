import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  box: {},
  maincontainer: {
    margin: "0px 40px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    margin: "0px auto",
  },
  loader: {
    paddingBottom: "28px",
  },
  containerInner: {
    border: "1px solid #009C19",
    borderRadius: "10px",
    padding: "32px 32px 0",
  },
}));
