import React from "react";
import { makeStyles } from "@mui/styles";

import { COLORS } from "../../theme";
import Section from "../Section/Section";
import QuestionAnswer from "./QuestionAnswer";
import { FAQ_DATA } from "../DataImports/index";

const useStyles = makeStyles((theme) => ({
  root: { color: COLORS.WHITE_MAIN },
}));

const Faq = () => {
  const classes = useStyles();

  return (
    <Section title="FAQ - Часто Задаваемые Вопросы" anchor="faq">
      <div className={classes.root}>
        {FAQ_DATA.map((row, idx) => {
          return <QuestionAnswer row={row} key={idx} />;
        })}
      </div>
    </Section>
  );
};

export default Faq;
