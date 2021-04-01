import React from "react";
import PropTypes from "prop-types";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as felaRules from "./HomePage.styles";
import Header from "../Header";

const HomePage = () => {
  const { styles } = useFelaEnhanced(felaRules);

  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

HomePage.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;
