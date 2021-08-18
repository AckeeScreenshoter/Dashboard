import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { Select, Form, Space } from 'antd';

import uuid from 'react-uuid';

import * as felaRules from './FilterBar.styles';
import useFilters from '../../hooks/useFilters';
const { Option } = Select;

const FilterBar = () => {
    const { styles } = useFelaEnhanced(felaRules);

    const { appName, platform, deviceModel } = useFilters();
    return (
        <div className={styles.container}>
            <Form className={styles.container} size="large" layout="vertical">
                <Space size={'large'}>
                    <Form.Item className={styles.formItem} label="App name" name="AppName">
                        <Select
                            className={styles.select}
                            style={{ width: 200 }}
                            showSearch
                            optionFilterProp="children"
                            placeholder="All"
                            dropdownClassName={styles.dropdown}
                        >
                            {platform.map(platform => (
                                <Option key={platform} value={platform}>
                                    {platform}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item className={styles.formItem} label="Platform" name="Platform">
                        <Select
                            className={styles.select}
                            style={{ width: 200 }}
                            showSearch
                            optionFilterProp="children"
                            placeholder="All"
                            dropdownClassName={styles.dropdown}
                        >
                            {deviceModel.map(deviceModel => (
                                <Option key={deviceModel} value={deviceModel}>
                                    {deviceModel}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item className={styles.formItem} label="Device model" name="DeviceModel">
                        <Select
                            className={styles.select}
                            style={{ width: 200 }}
                            showSearch
                            optionFilterProp="children"
                            placeholder="All"
                            dropdownClassName={styles.dropdown}
                        >
                            {appName.map(appName => (
                                <Option key={uuid()} value={appName}>
                                    {appName}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Space>
            </Form>
        </div>
    );
};

export default FilterBar;
