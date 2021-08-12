import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import * as felaRules from "./ReportsList.styles";

import {
  actions,
  selectors as reportsSelectors,
} from "modules/entities/modules/reports";

const ReportsList = () => {
  const { styles } = useFelaEnhanced(felaRules);
  const dispatch = useDispatch();
  dispatch(actions.fetchReportsRequest());

  const data = useSelector((state) => reportsSelectors.reportsSelector(state));

  return <div className={styles.container}>{JSON.stringify(data)}</div>;
};

export default ReportsList;
