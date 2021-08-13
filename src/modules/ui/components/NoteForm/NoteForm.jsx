import Button from '../Button';
import React from 'react';
import PropTypes from 'prop-types';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import * as felaRules from './NoteForm.styles';

const NoteForm = ({ note }) => {
    const { styles } = useFelaEnhanced(felaRules);

    return (
        <form>
            <textarea className={styles.TextArea} value={note} />
            <div className={styles.ButtonBox}>
                <Button type="secondary">Save</Button>
            </div>
        </form>
    );
};
NoteForm.propTypes = {
    note: PropTypes.string,
};

export default NoteForm;
