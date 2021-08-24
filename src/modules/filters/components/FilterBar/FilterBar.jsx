import React from 'react';
import { nanoid } from 'nanoid';
import { useIntl } from 'react-intl';
import { Select, Form, Row, Col } from 'antd';

import { useFilters } from 'modules/filters';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import * as felaRules from './FilterBar.styles';

const { Option } = Select;

const FilterBar = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const intl = useIntl();
    const { appName, platform, deviceModel } = useFilters();
    return (
        <div className={styles.container}>
            <Form className={styles.container} size="large" layout="vertical">
                <Row gutter={16} className={styles.row}>
                    <Col span={8} sm={2}>
                        <Form.Item
                            className={styles.formItem}
                            label={intl.formatMessage({ id: 'filters.appName' })}
                            name="AppName"
                        >
                            <Select
                                className={styles.select}
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
                    </Col>
                    <Col span={8} sm={2}>
                        <Form.Item
                            className={styles.formItem}
                            label={intl.formatMessage({ id: 'filters.platform' })}
                            name="Platform"
                        >
                            <Select
                                className={styles.select}
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
                    </Col>
                    <Col span={8} sm={2}>
                        <Form.Item
                            className={styles.formItem}
                            label={intl.formatMessage({ id: 'filters.deviceModel' })}
                            name="DeviceModel"
                        >
                            <Select
                                className={styles.select}
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
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default FilterBar;
