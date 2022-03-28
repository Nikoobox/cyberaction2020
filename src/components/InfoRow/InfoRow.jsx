import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    color: (props) => (props.color ? props.color : COLORS.WHITE_MAIN),
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "8px",
    // fontWeight: 300,
    fontSize: "18px",
    "& .circle": {
      backgroundColor: COLORS.GREEN_MAIN,
      lineHeight: "24px",
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "4px",
      marginRight: "8px",
      height: "8px",
      width: "8px",
      borderRadius: "50%",
    },
    "& .left": {
      fontWeight: 300,
      paddingRight: `8px`,
      fontSize: "18px",
      lineHeight: "24px",
    },
    "& .right": {
      fontSize: "18px",
      lineHeight: "24px",
      "&.MuiTypography-root": {
        fontWeight: 600,
      },
    },
  },
}));

const InfoRow = ({ data, color, isCircleShown }) => {
  const classes = useStyles({ color });
  const [left, right] = data;
  // console.log("color: ", color);
  return (
    <div className={classes.root}>
      {isCircleShown && <div className="circle" />}
      <Typography className="left">{left}</Typography>
      <Typography className="right">{right}</Typography>
    </div>
  );
};

export default InfoRow;
