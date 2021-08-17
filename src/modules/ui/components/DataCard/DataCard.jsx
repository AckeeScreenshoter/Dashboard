import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import { format } from 'date-fns';
import { AndroidFilled, AppleFilled, CopyOutlined } from '@ant-design/icons';

import videoImg from 'assets/images/thumbnail_vid.png';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import * as felaRules from './DataCard.styles';
import Button from '../Button';

const DataCard = ({ message, onClick }) => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <Card onClick={onClick} hoverable className={styles.card}>
            <Row>
                <Col xxl={{ span: 7 }} xl={{ span: 8 }}>
                    <img src={message.mediaUploaded ? message.image : videoImg} alt={message.appName} />
                </Col>
                <Col xxl={{ span: 15 }} xl={{ span: 14 }}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.cardHeader}>
                            <div>
                                <Typography.Text className={styles.createdAt}>
                                    {format(message.date.seconds * 1000, 'dd. mm. yyyy, HH:mm')}
                                </Typography.Text>
                                <Typography.Title level={3}>{message.appName}</Typography.Title>
                            </div>
                            {message.deviceMake === 'samsung' ? <AndroidFilled /> : <AppleFilled />}
                        </div>
                        {message.note && <Typography.Paragraph>{message.note}</Typography.Paragraph>}
                        <div className={styles.buttonBox}>
                            <Button type="secondary">
                                <FormattedMessage id="card.button.delete" />
                            </Button>
                            <Button type="primary" icon={<CopyOutlined />}>
                                <FormattedMessage id="card.button.copy" />
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};
DataCard.propTypes = {
    message: PropTypes.shape({
        mediaUploaded: PropTypes.bool,
        image: PropTypes.string,
        appName: PropTypes.string,
        date: PropTypes.shape({
            seconds: PropTypes.number,
            nanoseconds: PropTypes.number,
        }),
        deviceMake: PropTypes.string,
        note: PropTypes.string,
    }),
    onClick: PropTypes.func,
};

export default DataCard;
