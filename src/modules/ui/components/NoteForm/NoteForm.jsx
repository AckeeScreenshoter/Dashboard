import React from 'react';
import { Form, Input } from 'antd';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as felaRules from './NoteForm.styles';
import Button from '../Button';

const { TextArea } = Input;

const NoteForm = (id, note) => {
    const { styles } = useFelaEnhanced(felaRules);
    const [form] = Form.useForm();
    const [isTouched, setIsTouched] = React.useState();
    const onFinish = ({ note }) => {
        console.log(id, note);
    };
    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item name="note">
                <TextArea
                    onChange={() => {
                        setIsTouched(true);
                    }}
                    value={note}
                    className={styles.TextArea}
                />
            </Form.Item>
            <div className={styles.ButtonBox}>
                <Button htmlType="submit" disabled={!isTouched} type="primary">
                    <FormattedMessage id="save.note" />
                </Button>
            </div>
        </Form>
    );
};
NoteForm.propTypes = {
    note: PropTypes.string,
    id: PropTypes.string,
};

export default NoteForm;
