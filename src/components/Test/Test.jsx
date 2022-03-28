import React from "react";
import { makeStyles } from "@mui/styles";

import { COLORS } from "../../theme";
import Section from "../Section/Section";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.YELLOW_MUSTARD,
  },
}));

const Test = () => {
  const classes = useStyles();

  return (
    <Section>
      <div className={classes.root}>
        <ul style={{ margin: 0 }}>
          {Array.from(Array(40).keys()).map((num, idx) => (
            <li key={idx}>{num} HEllo how are you today</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Test;
