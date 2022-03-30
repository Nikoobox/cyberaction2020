import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: (props) => (props.noVerticalPadding ? 0 : "100px 0"),
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "48px",
    "& .MuiTypography-root": {
      fontWeight: 300,
      color: COLORS.WHITE_MAIN,
      fontSize: "48px",
      lineHeight: "56px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        lineHeight: "48px",
        textAlign: "center",
      },
    },
  },
}));

const Section = ({ title, content, children, anchor, noVerticalPadding }) => {
  const classes = useStyles({ noVerticalPadding });

  return (
    <Container className={classes.root} id={anchor}>
      <div className={classes.titleWrapper}>
        <Typography>{title}</Typography>
      </div>

      {content && content}

      <div className={classes.contentWrapper}>{children}</div>
      <div></div>
    </Container>
  );
};

export default Section;
