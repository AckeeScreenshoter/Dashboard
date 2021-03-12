import React from "react";
import PropTypes from "prop-types";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as felaRules from "./HomePage.styles";

const HomePage = () => {
  const { styles } = useFelaEnhanced(felaRules);

  return (
    <div className={styles.container}>
      <h1>HomePage</h1>
    </div>
  );
};

HomePage.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;
