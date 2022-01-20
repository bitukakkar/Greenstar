import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  maincontainer: {
    padding: "6px 40px",
    background: "linear-gradient(89.49deg, #008A17 -0.12%, #007013 100%)",
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
