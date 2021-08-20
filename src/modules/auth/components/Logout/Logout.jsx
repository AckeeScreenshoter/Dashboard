import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from 'modules/ui';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
    const { signOut, api } = useLogout();
    return (
        <Button onClick={signOut} loading={api.inProgress}>
            <FormattedMessage id="button.logout" />
        </Button>
    );
};

export default Logout;
