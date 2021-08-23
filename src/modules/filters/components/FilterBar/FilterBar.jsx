import React from 'react';
import { nanoid } from 'nanoid';
import { useIntl } from 'react-intl';
import { Select, Form, Row, Col } from 'antd';

import { useFilters } from 'modules/filters';
import { useReportsFetcher } from 'modules/reports';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import * as felaRules from './FilterBar.styles';

const { Option } = Select;

const FilterBar = () => {
    const { styles } = useFelaEnhanced(felaRules);
    const intl = useIntl();

    const { fetchReports, inProgress } = useReportsFetcher();
    const { appName, platform, deviceModel } = useFilters();

    const [form] = Form.useForm();

    const handleChange = form => {
        fetchReports(form.getFieldsValue());
    };
    const filterProps = [
        {
            name: 'appName',
            options: ['All'].concat(appName),
            label: 'App name',
        },
        {
            name: 'platform',
            options: ['All'].concat(platform),
            label: 'Platform',
        },
        {
            name: 'deviceModel',
            options: ['All'].concat(deviceModel),
            label: 'Device model',
        },
    ];

    return (
        <div className={styles.container}>
            <Form
                className={styles.container}
                onFieldsChange={() => handleChange(form)}
                form={form}
                // initialValues={{ appName: 'All', deviceModel: 'All', platform: 'All' }}
                size="large"
                layout="vertical"
            >
                <Row gutter={16} className={styles.row}>
                    {filterProps.map(select => (
                        <Col key={nanoid()} span={8} sm={2}>
                            <Form.Item
                                className={styles.formItem}
                                label={intl.formatMessage({ id: `filters.${select.name}` })}
                                name={select.name}
                            >
                                <Select
                                    className={styles.select}
                                    showSearch
                                    disabled={inProgress}
                                    optionFilterProp="children"
                                    placeholder="All"
                                    dropdownClassName={styles.dropdown}
                                >
                                    {select.options.map(appName => (
                                        <Option key={appName} value={appName}>
                                            {appName}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    ))}
                </Row>
            </Form>
        </div>
    );
};

export default FilterBar;
