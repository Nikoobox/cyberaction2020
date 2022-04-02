import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { PlusIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";

import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  questionAnswer: {
    marginBottom: 32,
  },
  questionIcon: {
    "&.MuiSvgIcon-root": {
      fill: "none",
      height: 32,
      width: 32,
      color: COLORS.WHITE_MAIN,
    },
  },
  questionRow: {
    display: "flex",
    marginBottom: 8,
    transition: "all 0.2s ease",
    "&:hover": {
      // color: COLORS.GREEN_MAIN,
      cursor: "pointer",
      "& .MuiSvgIcon-root": {
        color: COLORS.GREEN_MAIN,
      },
    },
  },
  question: {
    "&.MuiTypography-root": {
      fontSize: `24px`,
      lineHeight: `32px`,
      marginLeft: 8,
    },
  },
  answer: {
    "&.MuiTypography-root": {
      fontSize: `18px`,
      lineHeight: `32px`,
      marginLeft: 40,
    },
  },
}));

const QuestionAnswer = ({ row }) => {
  const classes = useStyles();
  const [isShown, setIsShown] = useState(false);
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
    <div className={classes.questionAnswer}>
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
    </div>
  );
};

export default QuestionAnswer;
