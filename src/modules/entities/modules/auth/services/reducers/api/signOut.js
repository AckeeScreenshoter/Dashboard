import { basicApiReducer } from '@ackee/redux-utils';

import { types } from '../../actions';

export default basicApiReducer({
    actionTypes: {
        REQUEST: types.SIGN_OUT_REQUEST,
        SUCCESS: types.SIGN_OUT_SUCCESS,
        FAILURE: types.SIGN_OUT_FAILURE,
        RESET: types.SIGN_OUT_RESET,
        CANCEL: types.SIGN_OUT_CANCEL,
    },
});
