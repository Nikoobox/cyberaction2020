import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { makeStyles } from "@mui/styles";
import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  questionAnswer: {
    marginBottom: 32,
  },
  questionIcon: {
    "&.MuiSvgIcon-root": {
      fill: "none",
      height: 24,
      width: 24,
      color: COLORS.WHITE_MAIN,
    },
  },
  questionRow: {
    display: "flex",
    marginBottom: 8,
    transition: "all 0.2s ease",
    "&:hover": {
      cursor: "pointer",
      "& .MuiSvgIcon-root": {
        color: COLORS.GREEN_MAIN,
      },
    },
  },
  question: {
    "&.MuiTypography-root": {
      fontSize: `18px`,
      lineHeight: `24px`,
      fontWeight: 600,
      marginLeft: 8,
    },
  },
  answer: {
    "&.MuiTypography-root": {
      fontSize: `18px`,
      lineHeight: `32px`,
      marginLeft: 40,
      fontWeight: 300,
    },
  },
}));

const QuestionAnswer = ({ row }) => {
  const classes = useStyles();
  const [isShown, setIsShown] = useState(false);
  const { ref, inView } = useInView({
    // visible percentage before trigering
    threshold: 0.2,
  });
  const [question, answer] = row;

  const handleClick = () => {
    if (!isShown) {
      setIsShown(true);
      setTimeout(() => setIsShown(false), 120000);
      return null;
    }

    return setIsShown(false);
  };

  return (
    <motion.div
      className={classes.questionAnswer}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView && { opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={classes.questionRow} onClick={handleClick}>
        <SvgIcon
          component={QuestionMarkCircleIcon}
          viewBox="0 0 24 24"
          className={classes.questionIcon}
        />
        <Typography className={classes.question}>{question}</Typography>
      </div>
      <Grow
        in={isShown}
        style={{ transformOrigin: "0 0 0 " }}
        {...(isShown ? { timeout: 1000 } : {})}
        unmountOnExit
      >
        <Typography className={classes.answer}>{answer}</Typography>
      </Grow>
    </motion.div>
  );
};

export default QuestionAnswer;
