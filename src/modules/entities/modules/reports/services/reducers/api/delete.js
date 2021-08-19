import { basicApiReducer } from '@ackee/redux-utils';
import { types } from '../../actions';

export default basicApiReducer({
    actionTypes: {
        REQUEST: types.DELETE_REPORT_REQUEST,
        SUCCESS: types.DELETE_REPORT_SUCCESS,
        FAILURE: types.DELETE_REPORT_FAILURE,
        CANCEL: types.DELETE_REPORT_CANCEL,
        RESET: types.DELETE_REPORT_RESET,
    },
});
