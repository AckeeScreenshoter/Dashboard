import React from 'react';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { actions, selectors as reportsSelectors } from 'modules/entities/modules/reports';
import { DataCard } from 'modules/ui';

import * as felaRules from './ReportsList.styles';

const ReportsList = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const dispatch = useDispatch();
    dispatch(actions.fetchReportsRequest());

    const data = useSelector(state => reportsSelectors.reportsSelector(state));
    console.log(data);

    return (
        <div className={styles.container}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {data.map(message => (
                    <Col md={8}>
                        <DataCard message={message} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ReportsList;
