import { createTheme } from "@mui/material/styles";

const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`;

export const COLORS = {
  BLACK_MAIN: "#0D0D0E",
  WHITE_MAIN: "#FFFFFF",
  GREEN_MAIN: "#3ecf00",
  GREY_MAIN: "#1c2126",
  GREY_CLASSIC: "#808080",
  RED_MAIN: "#FD1C03",
  YELLOW_MUSTARD: "#E1AD01",
  TEAL: "#008080",
  QUEEN_BLUE: "#3A6289",
};

const theme = createTheme({
  overrides: {
    a: {
      textDecoration: "none",
    },
  },
  palette: {
    background: {
      default: COLORS.BLACK_MAIN,
    },
    primary: {
      main: COLORS.BLACK_MAIN,
    },
    secondary: {
      main: COLORS.WHITE_MAIN,
    },
  },
  typography: {
    fontFamily,
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});

export default theme;
