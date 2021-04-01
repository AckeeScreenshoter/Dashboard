import React from "react";
import useFelaEnhanced from "hooks/useFelaEnhanced";

import * as felaRules from "./NoMatchPage.styles";

const NoMatchPage = () => {
  const { styles } = useFelaEnhanced(felaRules);
  return <div className={styles.container}>NoMatchPage</div>;
};

NoMatchPage.propTypes = {};

export default NoMatchPage;
