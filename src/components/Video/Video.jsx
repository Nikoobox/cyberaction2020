import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

import { COLORS } from "../../theme";
import backgroundVideo from "../../media/backgroundvideo_square_hi_long_croped.mp4";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.BLACK_MAIN,
  },
  videoWrapper: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },
  wrapper: {
    backgroundColor: "yellow",
    width: "100%",
    height: "100vh",
    // position: "absolute",
  },
}));

const Video = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <video
        autoPlay
        muted
        loop
        src={backgroundVideo}
        className={classes.videoWrapper}
      />
    </div>
  );
};

export default Video;
