import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import Section from "../Section/Section";
import { IMAGES } from "../DataImports/index";

const useStyles = makeStyles((theme) => ({
  root: {},
  sliderWrapper: {
    [theme.breakpoints.down("sm")]: { overflow: "hidden" },
  },
  imageWrapper: {
    maxWidth: "300px",
    maxHeight: "300px",
    borderRadius: "16px",
    margin: "0 16px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "100%",
      maxWidth: "100%",
      margin: 0,
    },
  },
  image: {
    width: "100%",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      height: "auto",
      width: "100%",
    },
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    // visible percentage before trigering
    threshold: 0.2,
  });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    dotsClass: "dots-custom",
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          fade: true,
        },
      },
    ],
  };

  const images = IMAGES.map((image, idx) => {
    return (
      <div className={classes.imageWrapper} key={idx}>
        <img src={image} className={classes.image} />
      </div>
    );
  });

  return (
    <Section title="Галерея" anchor="gallery">
      <motion.div
        className={classes.sliderWrapper}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Slider {...settings}>{images}</Slider>
      </motion.div>
    </Section>
  );
};

export default Gallery;
