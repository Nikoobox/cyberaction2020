import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { defineCustomElements } from "shooting-stars/dist/loader";

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
  defineCustomElements(window);
  return (
    <Section title="Цены и Правила" anchor="price">
      {/* <shooting-stars
        image="./star.png"
        height="'10px'"
        width="'10px'"
        min-speed="1"
        max-speed="5"
        num="10"
      ></shooting-stars> */}
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
