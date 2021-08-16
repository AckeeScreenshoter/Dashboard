import React from 'react';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import { Select, Form } from 'antd';

import * as felaRules from './FilterBar.styles';

const { Option } = Select;
const DummyData = [{ test: 'test' }, { test1: 'test1' }, { test2: 'test2' }];

const FilterBar = () => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <div className={styles.container}>
            <Form layout="vertical">
                <Form.Item className={styles.formItem} label="Required Mark" name="requiredMarkValue">
                    <Select className={styles.select} style={{ width: 200 }} placeholder="All">
                        {DummyData.map(item => () => <Option value={item}>{item.test}</Option>)}
                    </Select>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FilterBar;
