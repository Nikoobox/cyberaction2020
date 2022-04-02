import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { XIcon, PhoneIcon } from "@heroicons/react/outline";
import { FaTelegramPlane, FaVk } from "react-icons/fa";

import SvgIcon from "@mui/material/SvgIcon";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import HideOnScroll from "./HideOnScroll";
import { COLORS } from "../../theme";

const pages = [
  { name: "Игры", route: "/", anchor: "games" },
  { name: "Цены", route: "/", anchor: "price" },
  { name: "Дни Рождения", route: "/", anchor: "birthdays" },
  { name: "FAQ", route: "/", anchor: "faq" },
  { name: "Галерея", route: "/", anchor: "gallery" },
  { name: "Контакты", route: "/", anchor: "contacts" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "16px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  logo: {
    fontSize: "20px",
    color: COLORS.WHITE_MAIN,
    marginRight: "16px",
    display: "flex",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navButtonsWrapper: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "& .MuiButton-root": {
      margin: "8px 0",
      color: COLORS.WHITE_MAIN,
      display: "block",
      fontSize: "18px",
      fontWeight: 300,
    },
    "& a:-webkit-any-link": {
      textDecoration: "none",
      margin: "8px 0 8px 16px",
      color: COLORS.WHITE_MAIN,
      display: "block",
      fontSize: "18px",
      fontWeight: 300,
    },
  },
  navButtonWrapper: {
    margin: "8px 0",
    color: "white",
    display: "block",
    fontSize: "18px",
    fontWeight: 300,
  },
  drawer: {
    "&.MuiDrawer-paper": {
      backgroundColor: COLORS.BLACK_MAIN,
      opacity: 0.9,
      width: "100%",
    },
    "& ul": {
      padding: 0,
    },
    "& a:-webkit-any-link": {
      textDecoration: "none",
      color: COLORS.WHITE_MAIN,
      display: "block",
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 500,
    },
  },
  drawerItemWrapper: {
    padding: "16px",
    paddingLeft: "32px",
  },
  drawerItem: {
    color: COLORS.WHITE_MAIN,
    "& .MuiListItemText-primary": {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 600,
    },
  },
  divider: {
    "&.MuiDivider-root": {
      backgroundColor: COLORS.GREY_CLASSIC,
      marginLeft: "24px",
      marginRight: "24px",
    },
  },
  iconButton: {
    width: "40px",
    height: "40px",
    backgroudnColor: "transparent",
    "&.MuiButtonBase-root": {
      padding: 0,
    },
    "& .close-icon": {
      color: "white",
      width: "100%",
      height: "100%",
    },
  },
  burgerIcon: {
    "&.MuiButtonBase-root": {
      padding: 0,
      width: 40,
      height: 40,
      "& svg": {
        width: "100%",
        height: "100%",
      },
    },
  },
  callContainer: {
    padding: "16px",
    paddingLeft: "32px",
    "& a:-webkit-any-link": {
      fontSize: "18px",
      lineHeight: "24px",
    },
    "& .call-row": {
      display: "flex",
      "& .phone-icon": {
        marginRight: "8px",
        height: 24,
        width: 24,
        fill: "none",
      },
    },
  },
  socialContainer: {
    display: "flex",
    padding: "16px",
    paddingLeft: "32px",
    "& .social-icon-box": {
      marginRight: "24px",
      height: 32,
      width: 32,
      "& svg": {
        width: "100%",
        height: "100%",
      },
    },
  },
}));

const Navbar = () => {
  const isXS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMD = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(!drawerState);
  };

  useEffect(() => {
    if (isMD && drawerState) {
      setDrawerState(false);
    }
  }, [isMD]);

  return (
    <>
      <HideOnScroll>
        <AppBar elevation={0} className={classes.root}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <a
                href="/"
                onClick={() => {
                  scroll.scrollToTop();
                }}
                className={classes.logo}
                id="home"
              >
                {/* web */}
                CYBERACTION SAMARA
              </a>

              {/* web */}
              <div className={classes.navButtonsWrapper}>
                {pages.map((page) => {
                  return (
                    <ScrollLink
                      href={page.route}
                      to={page.anchor}
                      smooth={true}
                      duration={1000}
                    >
                      {page.name}
                    </ScrollLink>
                  );
                })}
              </div>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                {/* mobile */}
                CYBERACTION SAMARA
              </Typography>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer()}
                  color="inherit"
                  className={classes.burgerIcon}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <SwipeableDrawer
        // disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        classes={{ paper: classes.drawer }}
        anchor="right"
        open={drawerState}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        <Box
          sx={{ width: "100%" }}
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: isXS ? "8px 16px 0" : "32px 24px 16px 16px",
            }}
          >
            <IconButton
              className={classes.iconButton}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer()}
            >
              <SvgIcon
                component={XIcon}
                viewBox="0 0 24 24"
                className="close-icon"
              />
            </IconButton>
          </div>
          <List>
            {pages.map((page, idx) => (
              <>
                <div className={classes.drawerItemWrapper}>
                  <ScrollLink
                    href={page.route}
                    to={page.anchor}
                    smooth={true}
                    duration={1000}
                    onClick={toggleDrawer()}
                  >
                    {page.name}
                  </ScrollLink>
                </div>
                <Divider className={classes.divider} fullWidth />
              </>
            ))}
            <div className={classes.callContainer}>
              <a
                href="tel:+7927 898-9945"
                rel="noopener
                noreferrer"
                target="_blank"
              >
                <div className="call-row">
                  <SvgIcon
                    component={PhoneIcon}
                    viewBox="0 0 24 24"
                    className="phone-icon"
                  />
                  <div>+7 (927) 898-99-45</div>
                </div>
              </a>
            </div>
            <Divider className={classes.divider} fullWidth />
            <div className={classes.socialContainer}>
              <a
                href="https://vk.com/public190508549"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="social-icon-box">
                  <FaVk />
                </div>
              </a>
              <a
                href="https://t.me/CYBERACTIONSAMARA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="social-icon-box">
                  <FaTelegramPlane />
                </div>
              </a>
            </div>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
