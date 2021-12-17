import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import { mergeStyles } from "@fluentui/react";

import "./styles/index.css";

mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
