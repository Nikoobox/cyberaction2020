import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";

import InfoRow from "../InfoRow/InfoRow";
import { COLORS } from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: `260px`,
    padding: `16px`,
    borderRadius: "24px",
    border: `2px solid ${COLORS.WHITE_MAIN}`,
    color: COLORS.WHITE_MAIN,
    "& .MuiTypography-root": {
      fontWeight: 300,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: 0,
    },
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "8px",
  },
  headerRow: {
    marginBottom: "16px",
    "& .MuiTypography-root": {
      fontSize: `24px`,
      lineHeight: `32px`,
    },
  },
  headerIcon: {
    marginRight: "8px",
    "&.MuiSvgIcon-root": {
      fill: "none",
      height: 32,
      width: 32,
      color: COLORS.GREEN_MAIN,
    },
  },
}));

const Card = ({ header, headerIcon, rows }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={`${classes.row} ${classes.headerRow}`}>
        <SvgIcon
          component={headerIcon}
          viewBox="0 0 24 24"
          className={classes.headerIcon}
        />
        <Typography>{header}</Typography>
      </div>

      {rows.map((row, idx) => (
        <InfoRow data={row} key={idx} />
      ))}
    </div>
  );
};

export default Card;
