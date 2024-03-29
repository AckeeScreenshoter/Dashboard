import React from 'react';
import { Col } from 'antd';

import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { DataCard } from 'modules/ui';

import CardDetail from '../CardDetail';
import useReports from '../../hooks/useReports';
import { useFetchReports } from 'modules/reports';
import InfiniteScrollWrap from '../InfiniteScroll';
import * as felaRules from './ReportsList.styles';
import { nanoid } from 'nanoid';

const ReportsList = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const [detailData, setDetailData] = React.useState(null);
    const { data, params } = useReports();
    const { fetchReports } = useFetchReports();

    const handleCancel = () => {
        setDetailData(null);
    };
    const loadItems = () => {
        fetchReports(params);
    };

    const items = React.useMemo(() => {
        return data.map(message => (
            <Col className={styles.item} md={12} lg={8} key={nanoid()}>
                <DataCard onClick={() => setDetailData(message)} message={message} />
            </Col>
        ));
    }, [data, styles.item]);

    return (
        <div className={styles.container}>
            <InfiniteScrollWrap fetchNext={loadItems} items={items} hasNext={params.hasNext} />
            {detailData ? <CardDetail visible={!!detailData} onCancel={handleCancel} message={detailData} /> : null}
        </div>
    );
};

export default ReportsList;
