import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Splash from "./components/Splash/Splash";
import Navbar from "./components/Navbar/Navbar";
import Widget from "./components/Widget/Widget";
import theme from "./theme";

const App = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Widget toggleDrawer={toggleDrawer} isOpenDrawer={isOpenDrawer} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Splash />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
