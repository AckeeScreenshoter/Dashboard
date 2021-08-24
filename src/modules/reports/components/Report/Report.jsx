import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import * as felaRules from './Report.styles';
import { useParams } from 'react-router-dom';
const Report = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const { id } = useParams();

    return (
        <div className={styles.container}>
            <h1>{id}</h1>
        </div>
    );
};

export default Report;
