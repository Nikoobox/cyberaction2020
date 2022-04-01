import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {},
  messageContainer: {
    position: "absolute",
    top: "60%",
    transform: "translateY(-60%)",
    [theme.breakpoints.down("sm")]: {
      margin: "0 16px",
      left: 0,
      textAlign: "center",
    },
  },
  header: {
    color: COLORS.WHITE_MAIN,
    "&.MuiTypography-root": {
      fontSize: `56px`,
      lineHeight: `64px`,
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        lineHeight: "48px",
      },
    },
  },
  body: {
    color: COLORS.WHITE_MAIN,
    "&.MuiTypography-root": {
      marginTop: "8px",
      fontSize: `56px`,
      lineHeight: `64px`,
      fontWeight: 300,
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        lineHeight: "48px",
        padding: "6px 16px",
      },
    },
  },
  buttonWrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
    "& .buttonWrapper": {
      backgroundColor: COLORS.RED_MAIN,
      padding: "8px 16px",
      borderRadius: "24px",
      color: COLORS.WHITE_MAIN,
      display: "block",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 300,
      marginTop: "16px",
      border: `${COLORS.RED_MAIN} solid 4px`,
      boxShadow: "0px 0px 0px 1px #fff inset",
      "&:hover": {
        backgroundColor: COLORS.RED_MAIN,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
        lineHeight: "32px",
        padding: "6px 16px",
      },
    },
  },
}));

const WelcomeMessage = ({ toggleVideoSound }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.messageContainer}>
        <Typography className={classes.header}>
          Первая VR Арена в Самаре
        </Typography>
        <Typography className={classes.body}>
          {/* {text}
          {!isFinishedTyping && <Cursor />} */}
          Уникальный командный шутер
        </Typography>
        {/* <div className={classes.buttonWrapper}>
          <Button className="buttonWrapper">Забронировать</Button>
        </div> */}
        {/* <button type="button" class="btn btn-book btn-lg">
          <a class="ms_booking" href="https://w327499.yclients.com/widgetJS">
            Забронировать
          </a>
        </button> */}
        <a
          className=""
          style={{
            marginTop: "24px",
            backgroundColor: "white",
            padding: "16px",
          }}
          href="https://w327499.yclients.com/widgetJS"
        >
          Забронировать
        </a>
        {/* <a
          href="/"
          class="ms_booking"
          data-url="https://w327499.yclients.com/widgetJS"
        >
          TEST
        </a> */}
        {/* <iframe
          height="545px"
          width="320px"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          id="ms_booking_iframe"
          // src="https://w1234.yclients.com/"
          src="https://w327499.yclients.com/"
        ></iframe> */}
      </div>
    </Container>
  );
};

export default WelcomeMessage;
