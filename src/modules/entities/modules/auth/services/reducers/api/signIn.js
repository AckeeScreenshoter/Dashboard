import { basicApiReducer } from '@ackee/redux-utils';

import { types } from '../../actions';

export default basicApiReducer({
    actionTypes: {
        REQUEST: types.SIGN_IN_REQUEST,
        SUCCESS: types.SIGN_IN_SUCCESS,
        FAILURE: types.SIGN_IN_FAILURE,
        RESET: types.SIGN_IN_RESET,
        CANCEL: types.SIGN_IN_CANCEL,
    },
});
