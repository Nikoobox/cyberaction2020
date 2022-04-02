import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PlayIcon } from "@heroicons/react/outline";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

import { COLORS } from "../../theme";
import WatchVideoButton from "../WatchVideoButton/WatchVideoButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `16px`,
    borderRadius: "24px",
    border: `1px solid ${COLORS.WHITE_MAIN}`,
    color: COLORS.WHITE_MAIN,
    height: "100%",
  },
  sliderWrapper: {
    "& .dots-custom": {
      marginTop: "4px",
    },
    [theme.breakpoints.down("md")]: {
      "& .slick-list": {
        padding: 0,
      },
    },
  },
  name: {
    "&.MuiTypography-root": {
      marginBottom: "8px",
      fontSize: `24px`,
      lineHeight: `32px`,
    },
  },
  new: {
    "&.MuiTypography-root": {
      fontSize: `20px`,
      lineHeight: `32px`,
      color: COLORS.GREEN_MAIN,
      fontWeight: 600,
    },
  },
  description: {
    "&.MuiTypography-root": {
      marginBottom: "8px",
      fontSize: `18px`,
      lineHeight: `24px`,
    },
  },
  threeRows: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    cursor: "pointer",
  },
  imageWrapper: {
    width: "100%",
    height: "300px",
    borderRadius: "16px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "250px",
    },
  },
  image: {
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    // [theme.breakpoints.down("sm")]: {
    //   justifyContent: "flex-start",
    // },
  },
}));

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "dots-custom",
  centerMode: true,
  fade: true,
  centerPadding: "0px",
};

const Game = ({ name, isNew, description, video, pictures, handleClick }) => {
  const classes = useStyles();
  const [is3Rows, setIs3Rows] = useState(true);

  const { ref, inView } = useInView({
    // visible percentage before trigering
    threshold: 0.2,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!is3Rows) {
        setIs3Rows(true);
      }
    }, 5000);
    return () => clearTimeout(timeout);
  }, [is3Rows]);

  const images = pictures.map((pic, idx) => {
    return (
      <div className={classes.imageWrapper} key={idx}>
        <img src={pic} className={classes.image} />
      </div>
    );
  });

  return (
    <motion.div
      className={classes.root}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={classes.sliderWrapper}>
        <Slider {...settings}>{images}</Slider>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography className={classes.name}>{name}</Typography>
        {isNew && <Typography className={classes.new}>New</Typography>}
      </div>
      <Typography
        className={`${classes.description} ${is3Rows ? classes.threeRows : ""}`}
        onClick={() => setIs3Rows(!is3Rows)}
      >
        {description}
      </Typography>
      <div className={classes.buttonContainer}>
        <WatchVideoButton
          text="Обзор"
          handleClick={() => handleClick(video)}
          icon={PlayIcon}
          horizontalPadding="56px"
        />
      </div>
    </motion.div>
  );
};

export default Game;
