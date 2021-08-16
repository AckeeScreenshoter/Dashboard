import * as PropTypes from 'prop-types';
import * as sagaEffects from 'redux-saga/effects';
import * as Log from 'config/loglevel';
import * as Consts from 'constants/index';

export { PropTypes, sagaEffects, Log, Consts };

export { default as firebase, auth, AuthProviders } from 'config/firebase';
export { default as React } from 'react';
export { compose, combineReducers } from 'redux';
export { connect, useDispatch, useSelector } from 'react-redux';
export { eventChannel } from 'redux-saga';
export { Route, Switch, Link, NavLink, Redirect, useLocation, useRouteMatch } from 'react-router-dom';
export { goBack, push } from 'connected-react-router';
export { FelaComponent, connect as connectFela, useFela } from 'react-fela';
export {
    FormattedMessage,
    FormattedNumber,
    FormattedDate,
    FormattedTime,
    FormattedDateParts,
    injectIntl,
    useIntl,
} from 'react-intl';
export { createSelector } from 'reselect';

export { childrenPropType } from '@ackee/lucas';
export {
    strictObjectAccess,
    containerReducer,
    basicApiReducer,
    apiSelector,
    createApiRequestType,
    paginationApiReducer,
    infiniteListApiReducer,
} from '@ackee/redux-utils/es';
export { getIntl } from '@ackee/jerome';

export { default as Config } from 'config/config';
