import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {},
  messageContainer: {
    zIndex: 2,
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
    // "& a": {
    //   backgroundColor: COLORS.RED_MAIN,
    //   padding: "8px 16px",
    //   borderRadius: "24px",
    //   color: COLORS.WHITE_MAIN,
    //   display: "inline-block",
    //   fontSize: "18px",
    //   lineHeight: "24px",
    //   fontWeight: 300,
    //   marginTop: "16px",
    //   border: `${COLORS.RED_MAIN} solid 4px`,
    //   boxShadow: "0px 0px 0px 1px #fff inset",
    //   textDecoration: "none",
    //   "&:hover": {
    //     backgroundColor: COLORS.RED_MAIN,
    //   },
    //   [theme.breakpoints.down("sm")]: {
    //     fontSize: "18px",
    //     lineHeight: "24px",
    //     padding: "6px 16px",
    //   },
    // },
    "& .MuiButton-root": {
      backgroundColor: COLORS.RED_MAIN,
      padding: "8px 16px",
      borderRadius: "24px",
      color: COLORS.WHITE_MAIN,
      display: "inline-block",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 300,
      marginTop: "16px",
      border: `${COLORS.RED_MAIN} solid 4px`,
      boxShadow: "0px 0px 0px 1px #fff inset",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: COLORS.RED_MAIN,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: "24px",
        padding: "6px 16px",
      },
    },
  },
}));

const WelcomeMessage = ({ toggleDrawer }) => {
  const classes = useStyles();
  console.log("toggleDrawer", toggleDrawer);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
    >
      <Container className={classes.root}>
        <div className={classes.messageContainer}>
          <Typography className={classes.header}>
            Первая VR Арена в Самаре
          </Typography>
          <Typography className={classes.body}>
            Уникальный командный шутер
          </Typography>
          {/* <div className={classes.buttonWrapper}>
            <a href="//w327499.yclients.com/widgetJS" className="ms_booking">
              Забронировать
            </a>
          </div> */}
          <div className={classes.buttonWrapper}>
            <Button onClick={toggleDrawer()}> Забронировать</Button>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default WelcomeMessage;
