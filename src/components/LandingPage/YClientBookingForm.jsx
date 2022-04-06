import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const YClientBookingForm = () => {
  const isXS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const formWidth = isXS ? "100%" : "500px";
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        height="100%"
        width={formWidth}
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        id="ms_booking_iframe"
        // src="https://w1234.yclients.com/"
        src="https://w327499.yclients.com/"
      ></iframe>
    </div>
  );
};

export default YClientBookingForm;
