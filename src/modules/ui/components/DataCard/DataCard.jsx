import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import { format } from 'date-fns';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { AndroidFilled, AppleFilled, CopyOutlined } from '@ant-design/icons';

import DeleteButton from 'modules/reports/components/DeleteButton';
import * as felaRules from './DataCard.styles';
import Button from '../Button';
import videoImg from 'assets/images/thumbnail_vid.png';
import config from 'config/index';

const DataCard = ({ message, onClick }) => {
    const { styles } = useFelaEnhanced(felaRules);
    const { appName, date, note, deviceMake, mediaUploaded, image, id } = message;

    return (
        <Card onClick={onClick} hoverable className={styles.card}>
            <Row>
                <Col xs={{ span: 24 }} xxl={{ span: 7 }} xl={{ span: 8 }}>
                    <img src={image && mediaUploaded ? image : videoImg} alt={appName} />
                </Col>
                <Col xs={{ span: 24 }} xxl={{ span: 15 }} xl={{ span: 14 }}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.cardHeader}>
                            <div>
                                <Typography.Text className={styles.createdAt}>
                                    {format(date.seconds * 1000, 'dd. MM. yyyy, HH:mm')}
                                </Typography.Text>
                                <Typography.Title level={3}>{appName}</Typography.Title>
                            </div>
                            {deviceMake === 'samsung' ? <AndroidFilled /> : <AppleFilled />}
                        </div>
                        {note && <Typography.Paragraph>{note}</Typography.Paragraph>}
                        <div onClick={e => e.stopPropagation()} className={styles.buttonBox}>
                            <DeleteButton id={id} />

                            <Button
                                htmlType="button"
                                type="primary"
                                onClick={() => {
                                    navigator.clipboard.writeText(`${config.appUrl}/s/${id}`);
                                }}
                                icon={<CopyOutlined />}
                            >
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
        id: PropTypes.string,
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
