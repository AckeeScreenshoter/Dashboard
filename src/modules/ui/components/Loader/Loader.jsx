import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import PropTypes from 'prop-types';
import { Spin as AntdSpin } from 'antd';
import { childrenPropType } from '@ackee/lucas';
import { FormattedMessage } from 'react-intl';

import * as felaRules from './Loader.styles';

const Loader = ({ children, show, textId, inline }) => {
    const { styles } = useFelaEnhanced(felaRules);

    return show ? (
        <div className={inline ? styles.loaderLine : styles.loaderFull}>
            <AntdSpin className={styles.loader} size="large" />
            <div className={styles.text}>
                <FormattedMessage id={textId} />
            </div>
        </div>
    ) : (
        <>{children}</>
    );
};

Loader.propTypes = {
    children: childrenPropType,
    show: PropTypes.bool,
    inline: PropTypes.bool,
    textId: PropTypes.string,
};

Loader.defaultProps = {
    children: null,
    show: false,
    inline: false,
    textId: 'loader.title',
};

export default Loader;
