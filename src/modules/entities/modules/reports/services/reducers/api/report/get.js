import { basicApiReducer } from '@ackee/redux-utils';
import { types } from '../../../actions';

export default basicApiReducer({
    actionTypes: {
        REQUEST: types.FETCH_REPORT_REQUEST,
        SUCCESS: types.FETCH_REPORT_SUCCESS,
        FAILURE: types.FETCH_REPORT_FAILURE,
        CANCEL: types.FETCH_REPORT_CANCEL,
        RESET: types.FETCH_REPORT_RESET,
    },
});
