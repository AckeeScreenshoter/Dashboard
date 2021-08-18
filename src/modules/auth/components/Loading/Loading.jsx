import { React } from '../../dependencies';
import { Spin, Space } from 'antd';
import useFelaEnhanced from 'hooks/useFelaEnhanced';

import * as felaRules from './Loading.styles';

const Loading = () => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <div className={styles.container}>
            <Space size="middle">
                <Spin size="large" />
            </Space>
        </div>
    );
};

export default Loading;
