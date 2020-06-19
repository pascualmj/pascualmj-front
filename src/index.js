import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// CSS: Reset, Normalize & Typo
import "./assets/css/normalize.css";
import "./assets/css/reset.css";
import "./assets/css/typo.css";

// Global SCSS File
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
