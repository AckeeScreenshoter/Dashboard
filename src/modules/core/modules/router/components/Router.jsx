import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';

import { history } from '../config';

function Router({ children }) {
    return <ConnectedRouter history={history}>{children}</ConnectedRouter>;
}

Router.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Router;
