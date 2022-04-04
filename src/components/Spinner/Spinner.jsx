import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, 50%)",
    position: "absolute",
  },
}));

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress style={{ color: COLORS.WHITE_MAIN }} />
    </div>
  );
};

export default Spinner;
