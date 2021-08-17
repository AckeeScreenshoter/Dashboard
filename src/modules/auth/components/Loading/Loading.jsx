import { React, PropTypes } from '../../dependencies';
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

Loading.propTypes = {
    styles: PropTypes.shape({
        container: PropTypes.string.isRequired,
    }).isRequired,
};

export default Loading;
