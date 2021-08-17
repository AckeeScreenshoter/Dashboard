import React from 'react';
import { FormattedMessage } from 'react-intl';
import useFelaEnhanced from 'hooks/useFelaEnhanced';
import Button from 'modules/ui/components/Button';
import { actions } from 'modules/entities/modules/reports';
import useDeleteReport from '../../hooks/useDeleteReport';

const DeleteButton = ({ id }) => {
    const { api, deleteReport } = useDeleteReport(id);
    console.log(id, api);
    return (
        <Button onClick={deleteReport}>
            <FormattedMessage id="button.delete" />
        </Button>
    );
};

export default DeleteButton.js;
