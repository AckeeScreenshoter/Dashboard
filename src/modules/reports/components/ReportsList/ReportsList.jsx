import React from 'react';
import { Col } from 'antd';
import { FormattedMessage } from 'react-intl';

import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { DataCard, CardDetail } from 'modules/ui';

import useReports from '../../hooks/useReports';
import useReportsFetcher from '../../hooks/useReportFetcher';
import InfiniteScrollWrap from '../InfiniteScroll';
import * as felaRules from './ReportsList.styles';
import { nanoid } from 'nanoid';

const ReportsList = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const [detailData, setDetailData] = React.useState(null);
    const data = useReports();
    const { fetchReports, inProgress } = useReportsFetcher();

    const handleCancel = () => {
        setDetailData(null);
    };
    const items = [];
    data.map(message => {
        items.push(
            <Col className={styles.item} md={12} lg={8} key={nanoid()}>
                <DataCard onClick={() => setDetailData(message)} message={message} />
            </Col>,
        );
    });
    return (
        <div className={styles.container}>
            <InfiniteScrollWrap next={fetchReports} items={items} />
            {/* {!data.length <= 0 ? (
                    data.map(message => (
                        <Col className={styles.item} md={12} lg={8} key={message.date?.seconds}>
                            <DataCard message={message} onClick={() => setDetailData(message)} />
                        </Col>
                    ))
                ) : (
                    <h1 className={styles.empty}>
                        <FormattedMessage id="nothxing.found" />
                    </h1>
                )} */}

            {detailData ? <CardDetail visible={!!detailData} onCancel={handleCancel} message={detailData} /> : null}
        </div>
    );
};

export default ReportsList;
