import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';

import ReportsList from 'modules/reports';
import { actions, selectors as reportsSelectors } from 'modules/entities/modules/reports';
import { useDispatch, useSelector } from 'react-redux';
import * as felaRules from './HomePage.styles';

const HomePage = () => {
    const { styles } = useFelaEnhanced(felaRules);

    const dispatch = useDispatch();

    const data = useSelector(state => reportsSelectors.reportsSelector(state));
    dispatch(actions.fetchReportsRequest());
    return (
        <div className={styles.container}>
            <ReportsList data={data} />
        </div>
    );
};

export default HomePage;
