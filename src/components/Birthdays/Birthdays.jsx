import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import { CakeIcon } from "@heroicons/react/outline";
import { PhoneIcon, PlayIcon } from "@heroicons/react/outline";

import { BIRTHDAY_IMAGES } from "../DataImports/index";
import { COLORS } from "../../theme";
import Section from "../Section/Section";
import InfoRow from "../InfoRow/InfoRow";
import bdayVideo from "../../media/bdayvideotrimed.mp4";
import MyModal from "../MyModal/MyModal";
import {
  BDAY_DATA,
  BDAY_DATA_EXTRA,
  BDAY_DATA_INCLUDED,
} from "../DataImports/index";
import WatchVideoButton from "../WatchVideoButton/WatchVideoButton";

const useStyles = makeStyles((theme) => ({
  root: { color: COLORS.WHITE_MAIN },
  contentWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  sliderWrapper: {
    width: "45%",
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      "& .slick-list": {
        padding: 0,
      },
    },
  },
  imageWrapper: {
    width: "100%",
    borderRadius: "16px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
  },
  header: {
    display: "flex",
    marginBottom: "24px",
  },
  headerIcon: {
    marginRight: "8px",
    "&.MuiSvgIcon-root": {
      fill: "none",
      height: 32,
      width: 32,
      color: COLORS.GREEN_MAIN,
    },
  },
  headerText: {
    "&.MuiTypography-root": {
      fontSize: `24px`,
      lineHeight: `32px`,
    },
  },
  bdayInfoWrapper: {
    width: "55%",
    marginRight: "24px",
    "& a:-webkit-any-link": {
      textDecoration: "none",
      color: COLORS.WHITE_MAIN,
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: "32px",
    },
  },
  divider: {
    "&.MuiDivider-root": {
      margin: "24px 0 8px",
      color: "white",
      backgroundColor: COLORS.GREY_CLASSIC,
    },
  },
  subHeader: {
    "&.MuiTypography-root": {
      fontSize: "18px",
      lineHeight: "24px",
      marginTop: "24px",
      marginBottom: "16px",
    },
  },
  phoneWrapper: {
    display: "flex",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "24px",
    "& a:-webkit-any-link": {
      textDecoration: "none",
      color: COLORS.WHITE_MAIN,
    },
    "& .icon": {
      marginLeft: "4px",
      marginRight: "4px",
      width: "18px",
      fill: "none",
    },
  },
}));

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dotsClass: "dots-custom",
  autoplaySpeed: 5000,
  pauseOnHover: true,
  centerMode: true,
  fade: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        centerPadding: "0px",
      },
    },
  ],
};

const Birthdays = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const { ref, inView } = useInView({
    // visible percentage before trigering
    threshold: 0.2,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const images = BIRTHDAY_IMAGES.map((image, idx) => {
    return (
      <div className={classes.imageWrapper} key={idx}>
        <img src={image} className={classes.image} />
      </div>
    );
  });

  return (
    <>
      <motion.div
        className={classes.root}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Section title="Дни Рождения" anchor="birthdays">
          <div className={classes.contentWrapper}>
            <div className={classes.bdayInfoWrapper}>
              <div className={classes.header}>
                <SvgIcon
                  component={CakeIcon}
                  viewBox="0 0 24 24"
                  className={classes.headerIcon}
                />
                <Typography className={classes.headerText}>
                  Детский Праздник
                </Typography>
              </div>

              {BDAY_DATA.map((row, idx) => {
                return <InfoRow data={row} key={idx} isleftAligned />;
              })}
              <Typography className={classes.subHeader}>
                В стоимость входит:
              </Typography>
              {BDAY_DATA_INCLUDED.map((row, idx) => {
                return <InfoRow data={row} key={idx} isCircleShown />;
              })}

              <WatchVideoButton
                text="Видео праздника"
                handleClick={handleClick}
                icon={PlayIcon}
                horizontalPadding="32px"
                topMargin="24px"
              />

              <Typography className={classes.subHeader}>
                Дополнительная информация и бронирование по номеру:
              </Typography>
              <a
                href="tel:+7927 741-7246"
                rel="noopener
                noreferrer"
                target="_blank"
                className={classes.phoneWrapper}
              >
                <SvgIcon
                  component={PhoneIcon}
                  viewBox="0 0 24 24"
                  className="icon"
                />
                <div>+7 (927) 741-7246</div>
              </a>

              <Divider variant="fullWidth" className={classes.divider} />
              {BDAY_DATA_EXTRA.map((row, idx) => {
                return (
                  <InfoRow
                    data={row}
                    key={idx}
                    color={COLORS.GREY_CLASSIC}
                    isleftAligned
                  />
                );
              })}
            </div>

            <div className={classes.sliderWrapper}>
              <Slider {...settings}>{images}</Slider>
            </div>
          </div>
        </Section>
      </motion.div>

      <MyModal
        open={open}
        onClose={() => setOpen(false)}
        content={
          <CardMedia
            component="video"
            image={bdayVideo}
            title="title"
            controls
            autoPlay
          />
        }
      />
    </>
  );
};

export default Birthdays;
