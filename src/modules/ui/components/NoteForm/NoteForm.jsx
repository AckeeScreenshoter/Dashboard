import React from 'react';
import { Form, Input } from 'antd';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import PropTypes from 'prop-types';

import * as felaRules from './NoteForm.styles';
import Button from '../Button';

const { TextArea } = Input;

const NoteForm = ({ note }) => {
    const { styles } = useFelaEnhanced(felaRules);
    const [form] = Form.useForm();
    const [isTouched, setIsTouched] = React.useState();

    return (
        <Form form={form}>
            <TextArea
                onChange={() => {
                    setIsTouched(true);
                }}
                value={note}
                name="note"
                className={styles.TextArea}
            />
            <div className={styles.ButtonBox}>
                <Button htmlType="submit" disabled={!isTouched} type="primary">
                    Save
                </Button>
            </div>
        </Form>
    );
};
NoteForm.propTypes = {
    note: PropTypes.string,
};

export default NoteForm;
