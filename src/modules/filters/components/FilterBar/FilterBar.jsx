import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { Select, Form, Space } from 'antd';
import { useIntl } from 'react-intl';
import { nanoid } from 'nanoid';

import FilterFetcher from 'modules/filters/components/FilterFetcher';
import * as felaRules from './FilterBar.styles';
import useFilters from '../../hooks/useFilters';
const { Option } = Select;

const FilterBar = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const intl = useIntl();

    const { appName, platform, deviceModel } = useFilters();
    return (
        <FilterFetcher>
            <div className={styles.container}>
                <Form className={styles.container} size="large" layout="vertical">
                    <Space size={'large'}>
                        <Form.Item
                            className={styles.formItem}
                            label={intl.formatMessage({ id: 'filters.appName' })}
                            name="AppName"
                        >
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
                        <Form.Item
                            className={styles.formItem}
                            label={intl.formatMessage({ id: 'filters.platform' })}
                            name="Platform"
                        >
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
                        <Form.Item
                            className={styles.formItem}
                            label={intl.formatMessage({ id: 'filters.deviceModel' })}
                            name="DeviceModel"
                        >
                            <Select
                                className={styles.select}
                                style={{ width: 200 }}
                                showSearch
                                optionFilterProp="children"
                                placeholder="All"
                                dropdownClassName={styles.dropdown}
                            >
                                {appName.map(appName => (
                                    <Option key={nanoid()} value={appName}>
                                        {appName}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Space>
                </Form>
            </div>
        </FilterFetcher>
    );
};

export default FilterBar;
