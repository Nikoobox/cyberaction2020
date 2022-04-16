import React, { useState, useRef } from "react";
import {
  VolumeUpIcon,
  VolumeOffIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/outline";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";

import { COLORS } from "../../theme";
import backgroundVideoRect from "../../media/back_rect.mp4";
import WelcomeMessage from "./WelcomeMessage";
import Spinner from "../Spinner/Spinner";
import BookingDrawer from "./BookingDrawer";

const useStyles = makeStyles((theme) => ({
  root: { backgroundColor: COLORS.BLACK_MAIN },
  videoWrapper: {
    width: "100%",
    height: "100vh",
    top: 0,
    left: 0,
    objectFit: "cover",
    transition: "all 400ms ease 0ms",
  },
  videoControlButtonsWrapper: {
    position: "absolute",
    bottom: (props) => (props.isXS ? 26 : 24),
    left: (props) => (props.isXS ? 8 : 24),
    "& .videoControlButton": {
      "& .icon": {
        color: COLORS.WHITE_MAIN,
        fill: "none",
        height: 32,
        width: 32,
      },
    },
    "& .MuiButton-root": {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
}));

const LandingPage = () => {
  const vidRef = useRef(null);
  const isXS = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const classes = useStyles({ isXS });

  const toggleVideoSound = () => {
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    if (isPlaying) {
      vidRef.current.pause();
    }
    if (!isPlaying) {
      vidRef.current.play();
    }

    return setIsPlaying(!isPlaying);
  };

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <>
      <div className={classes.root}>
        <video
          ref={vidRef}
          className={classes.videoWrapper}
          autoPlay={isPlaying}
          loop
          muted={isMuted ? true : false}
          playsInline
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        >
          <source src={backgroundVideoRect} type="video/mp4" />
        </video>
        {isVideoLoaded ? (
          <WelcomeMessage
            toggleVideoSound={toggleVideoSound}
            toggleDrawer={toggleDrawer}
          />
        ) : (
          <Spinner />
        )}
        {isVideoLoaded && (
          <div className={classes.videoControlButtonsWrapper}>
            <Button
              onClick={toggleVideoSound}
              className="videoControlButton"
              disableRipple
            >
              {isMuted || !isPlaying ? (
                <SvgIcon
                  component={VolumeOffIcon}
                  viewBox="0 0 24 24"
                  className="icon"
                />
              ) : (
                <SvgIcon
                  component={VolumeUpIcon}
                  viewBox="0 0 24 24"
                  className="icon"
                />
              )}
            </Button>
            <Button
              onClick={togglePlay}
              className="videoControlButton"
              disableRipple
            >
              {isPlaying ? (
                <SvgIcon
                  component={PauseIcon}
                  viewBox="0 0 24 24"
                  className="icon"
                />
              ) : (
                <SvgIcon
                  component={PlayIcon}
                  viewBox="0 0 24 24"
                  className="icon"
                />
              )}
            </Button>
          </div>
        )}
      </div>
      <BookingDrawer isOpenDrawer={isOpenDrawer} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default LandingPage;
