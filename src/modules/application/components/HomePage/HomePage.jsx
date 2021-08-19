import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';

import ReportsList from 'modules/reports';
import * as felaRules from './HomePage.styles';
import FilterBar from 'modules/filters/components/FilterBar';
import FiltersFetcher from 'modules/filters/components/FiltersFetcher';
import ReportsFetcher from 'modules/reports/components/ReportsFetcher';

const HomePage = () => {
    const { styles } = useFelaEnhanced(felaRules);
    return (
        <>
            <FiltersFetcher>
                <FilterBar />
            </FiltersFetcher>
            <div className={styles.container}>
                <ReportsFetcher>
                    <ReportsList />
                </ReportsFetcher>
            </div>
        </>
    );
};

export default HomePage;
