import React from "react";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as felaRules from "./HomePage.styles";
import Header from "../Header";
import ReportsList from "modules/reports";

const HomePage = () => {
  const { styles } = useFelaEnhanced(felaRules);

  return (
    <div className={styles.container}>
      <Header />

      <ReportsList />
    </div>
  );
};

export default HomePage;
