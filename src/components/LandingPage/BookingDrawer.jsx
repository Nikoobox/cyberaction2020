import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SvgIcon from "@mui/material/SvgIcon";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { COLORS } from "../../theme";
import YClientBookingForm from "./YClientBookingForm";

const useStyles = makeStyles((theme) => ({
  drawer: {
    "&.MuiDrawer-paper": {
      backgroundColor: COLORS.BLACK_MAIN,
      opacity: 1,
      width: (props) => (props.isXS ? "100%" : "510px"),
    },
  },
  closeDrawerButton: {
    "& .MuiSvgIcon-root": {
      fill: "none",
    },
  },
}));

const BookingDrawer = ({ isOpenDrawer, toggleDrawer }) => {
  const isXS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const classes = useStyles({ isXS });

  return (
    <SwipeableDrawer
      classes={{ paper: classes.drawer }}
      anchor="right"
      open={isOpenDrawer}
      onClose={toggleDrawer()}
      onOpen={toggleDrawer()}
    >
      <Box
        sx={{ width: "100%" }}
        onClick={toggleDrawer()}
        onKeyDown={toggleDrawer()}
      >
        <IconButton
          className={classes.closeDrawerButton}
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer()}
          style={{
            position: "absolute",
            right: 24,
            top: 16,
            backgroundColor: COLORS.WHITE_MAIN,
            width: "40px",
            height: "40px",
          }}
        >
          <SvgIcon
            component={ChevronRightIcon}
            viewBox="0 0 24 24"
            className="close-drawer-icon"
          />
        </IconButton>
        <YClientBookingForm />
      </Box>
    </SwipeableDrawer>
  );
};

export default BookingDrawer;
