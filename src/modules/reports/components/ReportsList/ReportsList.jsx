import React from 'react';
import { Row, Col } from 'antd';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import useReports from '../../hooks/useReports';
import { FormattedMessage } from 'react-intl';
import { DataCard, CardDetail } from 'modules/ui';
import * as felaRules from './ReportsList.styles';

const ReportsList = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const [detailData, setDetailData] = React.useState(null);
    const data = useReports();
    const handleCancel = () => {
        setDetailData(null);
    };
    console.log(data);
    return (
        <div className={styles.container}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {data.length >= 0 ? (
                    data.map(message => (
                        <Col className={styles.item} md={12} lg={8} key={message.date?.seconds}>
                            <DataCard message={message} onClick={() => setDetailData(message)} />
                        </Col>
                    ))
                ) : (
                    <h1 className={styles.empty}>
                        <FormattedMessage id="nothing.found" />
                    </h1>
                )}
            </Row>

            {detailData ? <CardDetail visible={!!detailData} onCancel={handleCancel} message={detailData} /> : null}
        </div>
    );
};

export default ReportsList;
