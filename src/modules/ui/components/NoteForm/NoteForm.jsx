import React from 'react';
import { Form, Input } from 'antd';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import * as felaRules from './NoteForm.styles';
import Button from '../Button';
import { useAddNote } from 'modules/reports';
const { TextArea } = Input;

const NoteForm = ({ id, note }) => {
    const { addNote, api } = useAddNote();
    const { styles } = useFelaEnhanced(felaRules);
    const [form] = Form.useForm();
    const [isTouched, setIsTouched] = React.useState();
    const onFinish = ({ newNote }) => {
        addNote(id, newNote);
    };
    return (
        <Form form={form} onFinish={onFinish} initialValues={{ newNote: note }}>
            <Form.Item className={styles.FormItem} name="newNote">
                <TextArea
                    onChange={() => {
                        setIsTouched(true);
                    }}
                    className={styles.TextArea}
                />
            </Form.Item>
            <div className={styles.ButtonBox}>
                <Button htmlType="submit" loading={api.inProgress} disabled={!isTouched} type="primary">
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
