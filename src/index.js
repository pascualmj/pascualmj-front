import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

// CSS: Reset, Normalize & Typo
import "./assets/css/normalize.css";
import "./assets/css/reset.css";
import "./assets/css/typo.css";

// Global SCSS File
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LeMGqwZAAAAAKdZ7h1xlypJyA8dlUI6StqJxFYK">
      <App />
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
