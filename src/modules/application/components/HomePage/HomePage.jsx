import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';

import * as felaRules from './HomePage.styles';
import { ReportsList, ReportsFetcher } from 'modules/reports';
import { FiltersFetcher, FilterBar } from 'modules/filters';

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
