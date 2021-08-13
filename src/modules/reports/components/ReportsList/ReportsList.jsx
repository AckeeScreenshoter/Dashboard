import React from 'react';
import { Row, Col } from 'antd';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import PropTypes from 'prop-types';

import { DataCard, CardDetail } from 'modules/ui';
import * as felaRules from './ReportsList.styles';

const ReportsList = ({ data }) => {
    const { styles } = useFelaEnhanced(felaRules);
    const [detailData, setDetailData] = React.useState(null);

    const handleCancel = () => {
        setDetailData(null);
    };

    return (
        <div className={styles.container}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {data.map(message => (
                    <Col className={styles.item} md={12} lg={8} key={message.date?.seconds}>
                        <DataCard message={message} onClick={() => setDetailData(message)} />
                    </Col>
                ))}
            </Row>

            {detailData ? <CardDetail visible={!!detailData} onCancel={handleCancel} message={detailData} /> : null}
        </div>
    );
};
ReportsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReportsList;
