import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import PropTypes from 'prop-types';
import { Col, Row, Card } from 'antd';
import * as felaRules from './DataSkeleton.styles';

const DataSkeleton = () => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className={styles.item} md={12} lg={8}>
                <Card className={styles.card}>
                    <div className={styles.imgPlaceholder}></div>

                    <div className={styles.textPlaceholder}>
                        <div className={styles.date}></div>
                        <div className={styles.title}></div>
                        <div className={styles.buttoBox}>
                            <div className={styles.button}></div>
                            <div className={styles.button}></div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col className={styles.item} md={12} lg={8}>
                <Card className={styles.card}>
                    <div className={styles.imgPlaceholder}></div>

                    <div className={styles.textPlaceholder}>
                        <div className={styles.date}></div>
                        <div className={styles.title}></div>
                        <div className={styles.buttoBox}>
                            <div className={styles.button}></div>
                            <div className={styles.button}></div>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col className={styles.item} md={12} lg={8}>
                <Card className={styles.card}>
                    <div className={styles.imgPlaceholder}></div>

                    <div className={styles.textPlaceholder}>
                        <div className={styles.date}></div>
                        <div className={styles.title}></div>
                        <div className={styles.buttoBox}>
                            <div className={styles.button}></div>
                            <div className={styles.button}></div>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

DataSkeleton.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
};

export default DataSkeleton;
