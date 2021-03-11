import React from "react";
import PropTypes from "prop-types";

const NoMatchPage = ({ styles }) => {
  return <div className={styles.container}>NoMatchPage</div>;
};

NoMatchPage.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoMatchPage;
