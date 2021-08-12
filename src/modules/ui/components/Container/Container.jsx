import React from 'react';
import { childrenPropType } from '@ackee/lucas';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import * as felaRules from './Container.styles';

const Container = ({ children }) => {
    const { styles } = useFelaEnhanced(felaRules);
    return <main className={styles.container}>{children}</main>;
};

Container.propTypes = {
    children: childrenPropType.isRequired,
};

export default Container;
