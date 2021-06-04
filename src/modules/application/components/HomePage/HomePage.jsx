import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";

import useFelaEnhanced from "hooks/useFelaEnhanced";
import { DataCard } from "modules/ui";

import Header from "../Header";
import * as felaRules from "./HomePage.styles";

const data = [
  {
    appName: "FlashNews DevApi B 2690",
    appVersion: "0.20.1",
    buildNumber: 2690,
    bundleId: "com.flashnews.livesportnews.devapi.beta",
    customData: [],
    date: {
      nanoseconds: 909000000,
      seconds: 1604401761,
    },
    deviceMake: "samsung",
    deviceModel: "SM-A405FN",
    mediaUploaded: false,
    osVersion: "10 (api 29)",
    platform: "android",
  },
  {
    appName: "FlashNews",
    appVersion: "0.17.0",
    buildNumber: "2111",
    bundleId: "cz.ackee.flash-news.development.beta",
    date: {
      nanoseconds: 909000000,
      seconds: 1604401761,
    },
    deviceMake: "Apple",
    deviceModel: "iPhone8,4 (iPhone SE)",
    mediaUploaded: false,
    note: "",
    osVersion: "12.3.1",
    platform: "ios",
    scheme: "ass-flash-news",
    type: "image",
  },
];

const HomePage = () => {
  const { styles } = useFelaEnhanced(felaRules);

  return (
    <div className={styles.container}>
      <Header />
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {data.map((message) => (
          <Col md={8}>
            <DataCard message={message} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

HomePage.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;
