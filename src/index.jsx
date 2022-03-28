import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

// might be issues with StrictMode vs MUI in a future
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
