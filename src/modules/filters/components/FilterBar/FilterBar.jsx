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
            options: [intl.formatMessage({ id: 'all' })].concat(appName),
            label: intl.formatMessage({ id: 'filters.appName' }),
        },
        {
            name: 'platform',
            options: [intl.formatMessage({ id: 'all' })].concat(platform),
            label: intl.formatMessage({ id: 'filters.platform' }),
        },
        {
            name: 'deviceModel',
            options: [intl.formatMessage({ id: 'all' })].concat(deviceModel),
            label: intl.formatMessage({ id: 'filters.deviceModel' }),
        },
    ];

    return (
        <div className={styles.container}>
            <Form
                className={styles.container}
                onFieldsChange={() => handleChange(form)}
                form={form}
                initialValues={{
                    appName: intl.formatMessage({ id: 'all' }),
                    deviceModel: intl.formatMessage({ id: 'all' }),
                    platform: intl.formatMessage({ id: 'all' }),
                }}
                size="large"
                layout="vertical"
            >
                <Row gutter={16} className={styles.row}>
                    {filterProps.map(select => (
                        <Col key={nanoid()} span={8} lg={3}>
                            <Form.Item className={styles.formItem} label={select.label} name={select.name}>
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
