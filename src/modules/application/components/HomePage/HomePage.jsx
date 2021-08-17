import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';

import ReportsList from 'modules/reports';
import { actions, selectors as reportsSelectors } from 'modules/entities/modules/reports';
import { useDispatch, useSelector } from 'react-redux';
import * as felaRules from './HomePage.styles';
import FilterBar from 'modules/ui/components/FilterBar';

const HomePage = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(actions.fetchReportsRequest());
    }, [dispatch]);
    const data = useSelector(state => reportsSelectors.reportsSelector(state));

    return (
        <>
            <FilterBar />
            <div className={styles.container}>
                <ReportsList data={data} />
            </div>
        </>
    );
};

export default HomePage;
