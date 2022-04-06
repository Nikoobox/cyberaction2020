import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Splash from "./components/Splash/Splash";
import Navbar from "./components/Navbar/Navbar";
import Widget from "./components/Widget/Widget";
import theme from "./theme";
import WelcomeMessage from "./components/LandingPage/WelcomeMessage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        {/* <WelcomeMessage /> */}
        <Widget />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Splash />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
