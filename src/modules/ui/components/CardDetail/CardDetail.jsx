import React from 'react';
import { Modal, Typography, Col, Row } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { FormattedMessage, FormattedDate } from 'react-intl';
import config from 'config/index';

import * as felaRules from './CardDetail.styles';
import Button from '../Button';
import NoteForm from '../NoteForm';
import { DeleteButton } from 'modules/reports';

const CardDetail = ({ message, onCancel, visible }) => {
    const { styles } = useFelaEnhanced(felaRules);
    const { Text, Paragraph } = Typography;
    const {
        appName,
        platform,
        appVersion,
        date,
        customData,
        note,
        bundleId,
        deviceModel,
        deviceMake,
        osVersion,
        mediaUploaded,
        buildNumber,
        image,
        id,
    } = message;

    return (
        <div id="modalMount" className={styles.cardDetail}>
            <Modal
                visible={visible}
                onCancel={onCancel}
                className={styles.modal}
                width={1000}
                centered
                getContainer="#modalMount"
                footer={[
                    <div key={'id'}>
                        <DeleteButton onCancel={onCancel} id={id} />
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(`${config.appUrl}/s/${id}`);
                            }}
                            type="primary"
                            icon={<CopyOutlined />}
                        >
                            <FormattedMessage id="card.button.copy" />
                        </Button>
                    </div>,
                ]}
            >
                <Row>
                    <Col className={styles.textBox} xs={24} md={12}>
                        <Text className={styles.subTitle}>
                            <FormattedMessage id="card.detail.appName" />
                        </Text>
                        <h1 className={styles.mainTitle}>{appName}</h1>
                        <div className={styles.info}>
                            <Col sm={12}>
                                <Text className={styles.subTitle}>
                                    <FormattedMessage id="card.detail.os" />
                                </Text>
                                <Paragraph className={styles.subName}>{platform}</Paragraph>
                            </Col>
                            <Col sm={12}>
                                <Text className={styles.subTitle}>
                                    <FormattedMessage id="card.detail.device" />
                                </Text>
                                <Paragraph className={styles.subName}>{deviceModel}</Paragraph>
                            </Col>
                        </div>
                        <div className={styles.info}>
                            <Col sm={12}>
                                <Text className={styles.subTitle}>
                                    <FormattedMessage id="card.detail.appVersion" />
                                </Text>
                                <Paragraph className={styles.subName}>{appVersion}</Paragraph>
                            </Col>
                            <Col sm={12}>
                                <Text className={styles.subTitle}>
                                    <FormattedMessage id="card.detail.dateTime" />
                                </Text>
                                <Paragraph className={styles.subName}>
                                    <FormattedDate date={date} />
                                </Paragraph>
                            </Col>
                        </div>
                        <Text className={styles.subTitle}>Note</Text>
                        <NoteForm id={id} note={note} />
                        <h3 className={styles.secondTitle}>Custom developer data</h3>
                        <Text className={styles.subTitle}>
                            <FormattedMessage id="card.detail.id" />
                        </Text>
                        <Paragraph className={styles.subName}>{id}</Paragraph>
                        <Text className={styles.subTitle}>
                            <FormattedMessage id="card.detail.osVersion" />
                        </Text>
                        <Paragraph className={styles.subName}>{osVersion}</Paragraph>

                        <Text className={styles.subTitle}>
                            <FormattedMessage id="card.detail.mediaUploaded" />
                        </Text>
                        <Paragraph className={styles.subName}>{mediaUploaded?.toString()}</Paragraph>
                        <Text className={styles.subTitle}>
                            <FormattedMessage id="card.detail.deviceMake" />
                        </Text>
                        <Paragraph className={styles.subName}>{deviceMake}</Paragraph>
                        <Text className={styles.subTitle}>
                            <FormattedMessage id="card.detail.bundleId" />
                        </Text>
                        <Paragraph className={styles.subName}>{bundleId}</Paragraph>
                        <Text className={styles.subTitle}>
                            <FormattedMessage id="card.detail.customData" />
                        </Text>
                        <Paragraph className={styles.subName}>{JSON.stringify(customData)}</Paragraph>
                        <Text className={styles.subTitle}>
                            <FormattedMessage id="card.detail.buildNumber" />
                        </Text>
                        <Paragraph className={styles.subName}>{buildNumber}</Paragraph>
                    </Col>
                    <Col xs={24} md={12} className={styles.screenBox}>
                        <img alt={appName} className={styles.screenshot} src={image} />
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};
CardDetail.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.string,
        mediaUploaded: PropTypes.bool,
        image: PropTypes.string,
        appName: PropTypes.string,
        date: PropTypes.shape({
            seconds: PropTypes.number,
            nanoseconds: PropTypes.number,
        }),
        customData: PropTypes.object,
        platform: PropTypes.string,
        deviceMake: PropTypes.string,
        note: PropTypes.string,
        osVersion: PropTypes.string,
        appVersion: PropTypes.string,
        bundleId: PropTypes.string,
        buildNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        deviceModel: PropTypes.string,
    }),
    onCancel: PropTypes.func,
    visible: PropTypes.bool,
};

export default CardDetail;
