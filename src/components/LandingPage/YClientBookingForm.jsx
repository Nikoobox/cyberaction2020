import React from "react";
import { XIcon, PhoneIcon } from "@heroicons/react/outline";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";

const YClientBookingForm = () => {
  const isXS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const formWidth = isXS ? "100%" : "500px";
  return (
    <div style={{ height: "100vh" }}>
      {/* <IconButton
        className={classes.iconButton}
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer()}
      >
        <SvgIcon component={XIcon} viewBox="0 0 24 24" className="close-icon" />
      </IconButton> */}
      <iframe
        height="100%"
        width={formWidth}
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        id="ms_booking_iframe"
        // src="https://w1234.yclients.com/"
        src="//w327499.yclients.com/"
      ></iframe>
    </div>
  );
};

export default YClientBookingForm;
