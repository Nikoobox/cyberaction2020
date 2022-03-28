import React, { useEffect } from "react";
import _debounce from "lodash/debounce";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {},
  playButtonWrapper: {
    // width: "100%",
    "& .play-button": {
      display: "flex",
      backgroundColor: COLORS.BLACK_MAIN,
      borderRadius: "24px",
      outline: `1px solid ${COLORS.WHITE_MAIN}`,
      outlineOffset: "-4px",
      padding: (props) =>
        props.horizontalPadding
          ? `10px ${props.horizontalPadding}`
          : "10px 16px",
      color: COLORS.WHITE_MAIN,
      // fontSize: "18px",
      // lineHeight: "24px",
      fontWeight: 300,
      marginTop: "16px",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "auto",
        marginRight: "auto",
      },
      "& .info": {
        marginRight: "4px",
        fontSize: "18px",
        lineHeight: "24px",
      },
      "&:hover": {
        backgroundColor: COLORS.BLACK_MAIN,
        "& .MuiSvgIcon-root": {
          color: COLORS.GREEN_MAIN,
        },
      },
      "& .MuiSvgIcon-root": {
        fill: "none",
        height: 24,
        width: 24,
        transition: `0.2s ease-out`,
      },
    },
  },
}));

const WatchVideoButton = ({ text, icon, handleClick, horizontalPadding }) => {
  const classes = useStyles({ horizontalPadding });

  return (
    <div className={classes.playButtonWrapper}>
      <Button className="play-button" onClick={handleClick}>
        <Typography className="info">{text}</Typography>
        <SvgIcon component={icon} viewBox="0 0 24 24" className="icon" />
      </Button>
    </div>
  );
};

export default WatchVideoButton;
