import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';

import * as felaRules from './HomePage.styles';
import { Reports } from 'modules/reports';
import { Filters } from 'modules/filters';

const HomePage = () => {
    const { styles } = useFelaEnhanced(felaRules);
    return (
        <>
            <Filters />
            <div className={styles.container}>
                <Reports />
            </div>
        </>
    );
};

export default HomePage;
