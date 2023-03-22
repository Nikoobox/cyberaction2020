import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

import { COLORS } from "../../theme/index";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#ffdb58",
    position: "fixed",
    width: "100%",
    top: "80px",
    zIndex: 10000,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 0",
    [theme.breakpoints.down("sm")]: {
      top: "72px",
    },
  },
  box: {
    width: "100%",
    maxWidth: "1200px",
    position: "relative",
    padding: "0 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  header: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  body: {
    padding: "0px 1px",
    fontSize: "1.4rem",
    fontWeight: 800,
  },
  phone: {
    color: COLORS.BLACK_MAIN,
    fontSize: "1.4rem",
    fontWeight: 600,
    marginLeft: "16px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      paddingTop: "24px",
    },
    "& a": {
      color: COLORS.BLACK_MAIN,
    },
  },
  avito: {
    color: COLORS.BLACK_MAIN,
    marginRight: "16px",
    fontSize: "1.4rem",
    fontWeight: 600,
    "& a": {
      color: COLORS.BLACK_MAIN,
    },
  },
  linksBox: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  closeBtn: {
    position: "absolute",
    right: "1rem",
    top: "-0.2rem",
    height: "48px",
    width: "48px",
    "& svg": {
      width: "100%",
      height: "100%",
      transition: "all ease 0.2s",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
}));

const BANNER_DATA = {
  header: "Продается Арена Виртуальной Реальности!",
  body: "* Более подробная информация о продаже бизнеса по ссылке ниже либо по телефону",
  avitoLink:
    "https://www.avito.ru/samara/gotoviy_biznes/arena_virtualnoy_realnosti_2814271732",
};

const Banner = ({ isBottom = false }) => {
  const classes = useStyles();
  const [isShown, setIsShown] = useState(true);

  return (
    <motion.div
      className={classes.wrapper}
      style={{
        display: isShown ? "flex" : "none",
        position: isBottom ? "static" : "fixed",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
    >
      <div className={classes.box}>
        <div className={classes.header}>{BANNER_DATA.header}</div>
        <span className={classes.body}>{BANNER_DATA.body}</span>
        <Box
          display="flex"
          spacing={1}
          mt={2}
          mb={2}
          className={classes.linksBox}
        >
          <div className={classes.avito}>
            <a
              href={BANNER_DATA.avitoLink}
              rel="noopener
                noreferrer"
              target="_blank"
            >
              Мы на Avito
            </a>
          </div>
          <div className={classes.phone}>
            <a
              href="tel:+7996 722-5535"
              rel="noopener
                noreferrer"
              target="_blank"
            >
              +7(996) 722-5535
            </a>
          </div>
        </Box>

        <div
          className={classes.closeBtn}
          onClick={() => setIsShown(false)}
          style={{ display: isBottom ? "none" : "block" }}
        >
          <IoCloseOutline />
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
