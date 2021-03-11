import React from "react";
import PropTypes from "prop-types";

const HomePage = ({ styles }) => <>HomePage</>;

HomePage.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;
