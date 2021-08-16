import { React, FormattedMessage, useDispatch, Auth, useSelector } from '../../dependencies';

import useFelaEnhanced from 'hooks/useFelaEnhanced';
import Button from 'modules/ui/components/Button';
import * as felaRules from './Login.styles';
import { GoogleOutlined } from '@ant-design/icons';
import { Card } from 'antd';

const Login = () => {
    const dispatch = useDispatch();
    const signInApi = useSelector(Auth.selectors.signInApiSelector);
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

export default React.memo(Login);
