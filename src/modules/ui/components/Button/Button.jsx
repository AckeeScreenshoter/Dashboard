import React from "react";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import { Button as AntButton } from "antd";

import * as felaRules from "./Button.styles";

const Button = ({ children, type }) => {
  const { styles } = useFelaEnhanced(felaRules, { type });

  return <AntButton className={styles.button}>{children}</AntButton>;
};

export default Button;
