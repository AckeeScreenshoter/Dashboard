import React from 'react';
import { Modal, Typography, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { FormattedMessage, FormattedDate } from 'react-intl';

import { NoteForm } from 'modules/ui';
import { DeleteButton } from 'modules/reports';
import { CopyButton } from 'modules/reports/components/CopyButton';

import * as felaRules from './CardDetail.styles';

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
                    <div className={styles.buttonBox} key={'id'}>
                        <DeleteButton onCancel={onCancel} id={id} />
                        <CopyButton id={id} />
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
                                {date?.seconds && (
                                    <Paragraph className={styles.subName}>
                                        <FormattedDate value={date.seconds * 1000} />
                                    </Paragraph>
                                )}
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
        customData: PropTypes.object,
        image: PropTypes.string,
        appName: PropTypes.string,
        date: PropTypes.shape({
            seconds: PropTypes.number,
            nanoseconds: PropTypes.number,
        }),
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
