import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

import Section from "../Section/Section";
import { RULES_DATA } from "../DataImports/index";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {},
  headerIcon: {
    fill: "none",
  },
}));

const Rules = () => {
  const classes = useStyles();

  return (
    <Section title="Цены и Правила" anchor="price">
      <Grid container rowSpacing={8} columnSpacing={4}>
        {RULES_DATA.map((ruleData, idx) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={idx}>
              <Card {...ruleData} />
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Rules;
