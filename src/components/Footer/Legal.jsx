import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import { COLORS } from "../../theme";
import { LEGAL_DATA } from "../DataImports/index";

const useStyles = makeStyles((theme) => ({
  root: {
    color: COLORS.WHITE_MAIN,
  },
}));

const Legal = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {LEGAL_DATA.map((data, idx) => {
        const { title, rules } = data;
        return (
          <div key={idx}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <div>
              {rules.map((rule, ruleId) => {
                const { subTitle, paragraphs } = rule;
                return (
                  <div key={ruleId}>
                    <Typography variant="h5" gutterBottom>
                      {subTitle}
                    </Typography>
                    <div>
                      {paragraphs.map((paragraph, paragraphId) => {
                        return (
                          <div key={paragraphId}>
                            <Typography gutterBottom>{paragraph}</Typography>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Legal;
