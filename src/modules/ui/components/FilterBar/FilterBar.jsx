import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { Select, Form } from 'antd';

import * as felaRules from './FilterBar.styles';

const { Option } = Select;
const screenshots = [
    {
        username: 'jstuart123',
        displayName: 'John Stuart',
    },
    {
        username: 'a',
        displayName: 'f Stuart',
    },
    {
        username: 'b',
        displayName: 'a Stuart',
    },
];
const FilterBar = () => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <div className={styles.container}>
            <Form size="large" layout="vertical">
                <Form.Item className={styles.formItem} label="App name" name="AppName">
                    <Select
                        className={styles.select}
                        style={{ width: 200 }}
                        showSearch
                        optionFilterProp="children"
                        placeholder="All"
                        dropdownClassName={styles.dropdown}
                    >
                        {screenshots.map(s => (
                            <Option key={s.username} value={s.username}>
                                {s.displayName}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FilterBar;
