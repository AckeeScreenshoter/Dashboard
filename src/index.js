import React from "react";
import ReactDOM from "react-dom";
import App from "modules/application";
import Core from "modules/core";

import "antd/dist/antd.css";

ReactDOM.render(
  <Core>
    <App />
  </Core>,
  document.getElementById("root")
);
