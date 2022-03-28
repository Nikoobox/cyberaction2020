import React, { useState } from "react";
import { PhoneIcon } from "@heroicons/react/outline";
import { makeStyles } from "@mui/styles";
import SvgIcon from "@mui/material/SvgIcon";
import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: "24px",
    bottom: "24px",
    zIndex: 9,
  },
  widgetWrapper: {
    backgroundColor: COLORS.RED_MAIN,
    padding: "8px",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: `1px solid ${COLORS.WHITE_MAIN}`,
    outlineOffset: "-4px",
    "& a:-webkit-any-link": {
      textDecoration: "none",
      color: COLORS.WHITE_MAIN,
    },
    "& .icon-wrapper": {
      width: "36px",
      height: "36px",
      "& .phone-icon": {
        height: "100%",
        width: "100%",
        fill: "none",
      },
    },
  },
}));

const CustomWidget = () => {
  const classes = useStyles();
  const [gameVideo, setGameVideo] = useState("");
  const [open, setOpen] = useState(false);

  const handleClick = (videoLink) => {
    setOpen(!open);
    setGameVideo(videoLink);
  };

  return (
    <div className={classes.root}>
      <div className={classes.widgetWrapper}>
        <a
          href="tel:+7927 898-9945"
          rel="noopener
                noreferrer"
          target="_blank"
        >
          <div className="icon-wrapper">
            <SvgIcon
              component={PhoneIcon}
              viewBox="0 0 24 24"
              className="phone-icon"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default CustomWidget;
