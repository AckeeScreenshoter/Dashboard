import React from "react";
import { Card, Typography } from "antd";
import { FormattedMessage } from "react-intl";
import { format } from 'date-fns'
import { AndroidFilled, AppleFilled, CopyOutlined } from "@ant-design/icons";

import videoImg from "assets/images/thumbnail_vid.png";
import useFelaEnhanced from "hooks/useFelaEnhanced";

import * as felaRules from "./DataCard.styles";
import Button from "../Button";

const DataCard = ({ message }) => {
  const { styles } = useFelaEnhanced(felaRules);

  return (
    <Card
      hoverable
      cover={
        <img
          src={message.mediaUploaded ? message.image : videoImg}
          alt={message.appName}
        />
      }
      className={styles.card}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.cardHeader}>
          <div>
            <Typography.Text className={styles.createdAt}>
              {format(message.date.seconds * 1000, "dd. mm. yyyy, HH:mm")}
            </Typography.Text>
            <Typography.Title level={3}>{message.appName}</Typography.Title>
          </div>
          {message.deviceMake === "samsung" ? (
            <AndroidFilled />
          ) : (
            <AppleFilled />
          )}
        </div>
        {message.note && (
          <Typography.Paragraph>{message.note}</Typography.Paragraph>
        )}
        <div>
          <Button type="secondary">
            <FormattedMessage id="card.button.delete" />
          </Button>
          <Button type="primary" icon={<CopyOutlined />}>
            <FormattedMessage id="card.button.copy" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DataCard;
