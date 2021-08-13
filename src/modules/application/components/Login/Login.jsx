import React from 'react';
import PropTypes from 'prop-types';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { Card } from 'antd';

import Button from 'modules/ui/components/Button';
import * as felaRules from './Login.styles';
import { GoogleOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

const Login = () => {
    const { styles } = useFelaEnhanced(felaRules);
    // const onClick = () => {
    //     router.push('/');
    // };
    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <h1 className={styles.title}>
                    <FormattedMessage id="login.card.title" />
                </h1>
                <Button icon={<GoogleOutlined />} className={styles.button}>
                    <FormattedMessage id="login.card.googleButton" />
                </Button>
            </Card>
        </div>
    );
};

Login.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
};

export default Login;
