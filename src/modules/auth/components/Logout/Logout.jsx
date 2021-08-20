import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from 'modules/ui';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
    const { logout, api } = useLogout();
    return (
        <Button onClick={console.log('logout')} loading={api.inProgress}>
            <FormattedMessage id="button.logout" />
        </Button>
    );
};

export default Logout;
