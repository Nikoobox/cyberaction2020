import React from "react";
import { makeStyles } from "@mui/styles";
import LandingPage from "../LandingPage/LandingPage";
import Rules from "../Rules/Rules";
import Games from "../Games/Games";
import Birthdays from "../Birthdays/Birthdays";
import Faq from "../Faq/Faq";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Splash = () => {
  const classes = useStyles();

  return (
    <>
      <LandingPage />
      <Rules />
      <Birthdays />
      <Games />
      <Faq />
      <Gallery />
      <Footer />
    </>
  );
};

export default Splash;
