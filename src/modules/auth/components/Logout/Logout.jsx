import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'modules/ui';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
    const { signOut, api } = useLogout();
    return (
        <Button onClick={signOut()} disabled={api.inProgress || !api.success}>
            <FormattedMessage id="button.logout" />
        </Button>
    );
};

// Logout.propTypes = {
//     rules: PropTypes.shape().isRequired,
// };

export default Logout;
