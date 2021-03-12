import React from "react";
import PropTypes from "prop-types";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as rules from "./Container.styles";

const Container = ({ children }) => {
  const { styles } = useFelaEnhanced(rules);
  return <main className={styles.container}>{children}</main>;
};

Container.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default Container;
