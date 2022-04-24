import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { makeStyles } from "@mui/styles";
import { PlayIcon } from "@heroicons/react/outline";
import WatchVideoButton from "../WatchVideoButton/WatchVideoButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  videoContainer: {
    height: "200px",
    maxWidth: "400px",
    borderRadius: "16px",
    overflow: "hidden",
    "& img": {
      width: "100%",
    },
  },
}));

const VideoWithPreview = ({ video, handlePlayClick, title, image }) => {
  const classes = useStyles();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      className={classes.root}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={classes.videoContainer}>
        <img src={image} />
      </div>
      <div style={{ position: "absolute", bottom: -16 }}>
        <WatchVideoButton
          text={title}
          handleClick={() => handlePlayClick(video)}
          icon={PlayIcon}
        />
      </div>
    </motion.div>
  );
};

export default VideoWithPreview;
