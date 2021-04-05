import React from "react";

import * as felaRules from "./DataCard.styles";
import useFelaEnhanced from "hooks/useFelaEnhanced";
import { Card, Typography } from "antd";
import { FormattedMessage } from "react-intl";
import Button from "../Button";

const DataCard = ({ message }) => {
  const { styles } = useFelaEnhanced(felaRules);

  return (
    <Card hoverable>
      <img src={message.image} alt={message.appName} />
      <div className={styles.contentWrapper}>
        <Typography.Title level={3}>{message.appName}</Typography.Title>
        {message.note && (
          <Typography.Paragraph>{message.note}</Typography.Paragraph>
        )}
        <Button type="secondary">
          <FormattedMessage id="card.button.delete" />
        </Button>
      </div>
    </Card>
  );
};

export default DataCard;
