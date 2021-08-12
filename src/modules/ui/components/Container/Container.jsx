import React from "react";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as felaRules from "./Container.styles";

const Container = ({ children }) => {
  const { styles } = useFelaEnhanced(felaRules);
  return <main className={styles.container}>{children}</main>;
};


export default Container;
