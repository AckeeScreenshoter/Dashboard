import { Provider } from "react-redux";
import React from "react";
import PropTypes from "prop-types";

import { configureStore } from "../config";

function Redux({ children }) {
  const store = configureStore();

  return <Provider store={store}>{children}</Provider>;
}

Redux.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Redux;
