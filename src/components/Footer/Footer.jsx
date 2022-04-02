import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import {
  PhoneIcon,
  CalendarIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/react/outline";

import { FaTelegramPlane, FaVk } from "react-icons/fa";
import moment from "moment";
import nsLogo from "../../media/images/ns_logo_mini.png";
import { COLORS } from "../../theme";
import Section from "../Section/Section";
import Legal from "./Legal";
import MyModal from "../MyModal/MyModal";

const useStyles = makeStyles((theme) => ({
  triangle: {
    height: "100px",
    width: "100%",
    clipPath: "polygon(100% 10%, 100% 100%, 0 100%)",
    backgroundColor: COLORS.GREY_MAIN,
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(100% 60%, 100% 100%, 0 100%)",
    },
    marginBottom: "-1px",
  },
  root: {
    color: COLORS.WHITE_MAIN,
    backgroundColor: COLORS.GREY_MAIN,
    padding: "24px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "24px 0 32px",
    },
  },
  footerWrapper: {
    color: COLORS.WHITE_MAIN,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "& a:-webkit-any-link": {
      textDecoration: "none",
      color: COLORS.WHITE_MAIN,
    },
  },
  leftWrapper: {
    lineHeight: "32px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "24px",
    },
  },
  rightWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
    "& .nsWrapper": {
      display: "flex",
      "& .image-box": {
        marginLeft: "4px",
        height: "18px",
        width: "18px",
        "& img": {
          height: "100%",
          width: "100%",
        },
      },
    },
    "& .agreementButton": {
      color: COLORS.GREY_CLASSIC,
      padding: 0,
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  rowWrapper: {
    display: "flex",
    flexWrap: "nowrap",
    lineHeight: "32px",
    marginBottom: "8px",
  },
  left: {
    paddingRight: `6px`,
    "&.MuiSvgIcon-root": {
      fill: "none",
      height: 32,
      width: 32,
    },
  },
  right: {
    display: "flex",
  },
  social: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "8px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
    "& .social-icon-box": {
      marginLeft: "12px",
      width: "32px",
      height: "32px",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        marginRight: "16px",
        marginBottom: "24px",
      },
      "& svg": {
        width: "100%",
        height: "100%",
      },
      "& img": {
        fill: "white",
        width: "100%",
        height: "100%",
      },
    },
  },
  darkerFont: {
    color: COLORS.GREY_CLASSIC,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const todayDate = new Date();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.triangle} />

      <div className={classes.root}>
        <Section anchor="contacts" noVerticalPadding>
          <div className={classes.footerWrapper}>
            <div className={classes.leftWrapper}>
              <div className={classes.rowWrapper}>
                <a
                  href="https://yandex.ru/maps/-/CCUBmKa13C"
                  rel="noopener
                noreferrer"
                  target="_blank"
                  className={classes.right}
                >
                  <SvgIcon
                    component={LocationMarkerIcon}
                    viewBox="0 0 24 24"
                    className={classes.left}
                  />
                  <div>Самара, ул.Фрунзе 96, 3й этаж</div>
                </a>
              </div>
              <div className={classes.rowWrapper}>
                <SvgIcon
                  component={CalendarIcon}
                  viewBox="0 0 24 24"
                  className={classes.left}
                />
                <div>Будни 16:00-22:00, выходные 10:00-22:00</div>
              </div>
              <div className={classes.rowWrapper}>
                <a
                  href="tel:+7927 898-9945"
                  rel="noopener
                noreferrer"
                  target="_blank"
                  className={classes.right}
                >
                  <SvgIcon
                    component={PhoneIcon}
                    viewBox="0 0 24 24"
                    className={classes.left}
                  />
                  <div>+7 (927) 898-99-45</div>
                </a>
              </div>
              <div className={classes.rowWrapper}>
                <a
                  href="mailto:cyberaction_samara@mail.ru?subject=&body=Имя:%0D%0A%0D%0AНомер телефона:%0D%0A%0D%0AВаш вопрос:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0AЛибо позвоните нам по номеру: +7 927 898-99-45"
                  rel="noopener
                noreferrer"
                  target="_blank"
                  className={classes.right}
                >
                  <SvgIcon
                    component={MailIcon}
                    viewBox="0 0 24 24"
                    className={classes.left}
                  />
                  <div>cyberaction_samara@mail.ru</div>
                </a>
              </div>
            </div>
            <div className={classes.rightWrapper}>
              <div className={classes.social}>
                {/* <a
                  href="https://www.instagram.com/cyberaction_samara/?hl=en"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="social-icon-box">
                    <AiOutlineInstagram />
                  </div>
                </a> */}
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
              <div className={classes.rowWrapper}>
                <Button
                  onClick={() => setOpen(true)}
                  className="agreementButton"
                >
                  Пользовательское соглашение
                </Button>
              </div>
              <div className={classes.rowWrapper}>
                <Typography
                  className={`${classes.right} ${classes.darkerFont}`}
                >
                  All rights reserved ©2018-{moment(todayDate).format("YYYY")}
                </Typography>
              </div>
              <div className={classes.rowWrapper}>
                <a
                  href="https://nikolayshatalov.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="nsWrapper">
                    <Typography
                      className={`${classes.right} ${classes.darkerFont}`}
                    >
                      Built by
                    </Typography>
                    <div className="image-box">
                      <img src={nsLogo} alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <MyModal
        open={open}
        onClose={() => setOpen(false)}
        content={<Legal />}
        fullScreen
      />
    </>
  );
};

export default Footer;
