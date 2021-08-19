import React from 'react';
import { nanoid } from 'nanoid';

import { Select, Form, Row, Col } from 'antd';
import { useFilters } from 'modules/filters';
import useFelaEnhanced from 'hooks/useFelaEnhanced';

import * as felaRules from './FilterBar.styles';
const { Option } = Select;

const FilterBar = () => {
    const { styles } = useFelaEnhanced(felaRules);

    const { appName, platform, deviceModel } = useFilters();
    return (
        <div className={styles.container}>
            <Form className={styles.container} size="large" layout="vertical">
                <Row className={styles.row} gutter={16}>
                    <Col span={8} sm={2}>
                        <Form.Item className={styles.formItem} label="App name" name="AppName">
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
                        <Form.Item className={styles.formItem} label="Platform" name="Platform">
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
                    <Col xs={8} sm={2}>
                        <Form.Item className={styles.formItem} label="Device model" name="DeviceModel">
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
