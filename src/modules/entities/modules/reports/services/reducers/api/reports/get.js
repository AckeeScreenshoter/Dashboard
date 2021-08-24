import { basicApiReducer } from '@ackee/redux-utils';
import { types } from '../../../actions';

export default basicApiReducer({
    actionTypes: {
        REQUEST: types.FETCH_REPORTS_REQUEST,
        SUCCESS: types.FETCH_REPORTS_SUCCESS,
        FAILURE: types.FETCH_REPORTS_FAILURE,
        CANCEL: types.FETCH_REPORTS_CANCEL,
        RESET: types.FETCH_REPORTS_RESET,
    },
});
