import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const { REACT_APP_YCLIENTS_ID } = process.env;

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
        // src="//w327499.yclients.com/"
        src={`//${REACT_APP_YCLIENTS_ID}.yclients.com/`}
      ></iframe>
    </div>
  );
};

export default YClientBookingForm;
