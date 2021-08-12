import React from 'react';
import PropTypes from 'prop-types';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { Button as AntButton } from 'antd';
import { childrenPropType } from '@ackee/lucas';

import * as felaRules from './Button.styles';

const Button = ({ children, type, ...rest }) => {
    const { styles } = useFelaEnhanced(felaRules, { type });

    return (
        <AntButton className={styles.button} {...rest}>
            {children}
        </AntButton>
    );
};

Button.propTypes = {
    children: childrenPropType.isRequired,
    type: PropTypes.string,
};

export default Button;
