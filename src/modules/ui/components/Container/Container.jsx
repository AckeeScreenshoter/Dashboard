import React from "react";
import PropTypes from "prop-types";

const Container = ({ children, styles }) => (
  <main className={styles.container}>{children}</main>
);

Container.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default Container;
