import React from "react";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import Section from "../Section/Section";
import { IMAGES } from "../DataImports/index";

const useStyles = makeStyles((theme) => ({
  root: {},
  sliderWrapper: {
    margin: "0 32px",
    [theme.breakpoints.down("sm")]: { overflow: "hidden", margin: 0 },
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
    marginTop: "50%",
    transform: "translateY(-50%)",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      height: "auto",
      width: "100%",
    },
  },
}));

const Gallery = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
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
      <div className={classes.sliderWrapper}>
        <Slider {...settings}>{images}</Slider>
      </div>
    </Section>
  );
};

export default Gallery;
