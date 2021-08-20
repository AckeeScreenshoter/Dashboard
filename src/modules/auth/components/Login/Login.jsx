import React from 'react';
import { FormattedMessage } from 'react-intl';
import { GoogleOutlined } from '@ant-design/icons';
import { Card } from 'antd';

import { Button } from 'modules/ui';

import * as felaRules from './Login.styles';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import useLogin from '../../hooks/useLogin';
import { useDispatch, useSelector } from 'react-redux';
import * as Auth from 'modules/entities/modules/auth';
const Login = () => {
    const dispatch = useDispatch();
    const signInApi = useSelector(Auth.selectors.signInApiSelector);
    // const { login, api } = useLogin();
    const { styles } = useFelaEnhanced(felaRules);
    return (
        <div className={styles.container}>
            <Card className={styles.card}>
                <h1 className={styles.title}>
                    <FormattedMessage id="login.card.title" />
                </h1>
                <Button
                    icon={<GoogleOutlined />}
                    onClick={() => dispatch(Auth.actions.signInRequest())}
                    loading={signInApi.inProgress}
                    className={styles.button}
                >
                    <FormattedMessage id="login.card.googleButton" />
                </Button>
            </Card>
        </div>
    );
};

export default Login;
