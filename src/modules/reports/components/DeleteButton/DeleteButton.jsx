import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Button } from 'modules/ui';
import { useDeleteReport } from 'modules/reports';

const DeleteButton = ({ id, onCancel }) => {
    const { deleteReport } = useDeleteReport(id);
    const handleClick = () => {
        deleteReport();
        onCancel();
    };
    return (
        <Button onClick={handleClick}>
            <FormattedMessage id="button.delete" />
        </Button>
    );
};

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onCancel: PropTypes.func,
};

export default DeleteButton;
