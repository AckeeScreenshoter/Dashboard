import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';

import Header from '../Header';
import ReportsList from 'modules/reports';
import * as felaRules from './HomePage.styles';

const HomePage = () => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <div className={styles.container}>
            <Header />

            <ReportsList />
        </div>
    );
};

export default HomePage;
