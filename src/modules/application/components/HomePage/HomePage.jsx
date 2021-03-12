import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const HomePage = ({ styles }) => (
  <div className={styles.container}>
    <h1>HomePage</h1>
    <Button type='primary'>Primary</Button>
  </div>
);

HomePage.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;
