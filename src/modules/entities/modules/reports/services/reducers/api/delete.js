import { basicApiReducer } from '@ackee/redux-utils';
import { fetchReportsTypes } from '../../actions';

export default basicApiReducer({
    actionTypes: {
        REQUEST: fetchReportsTypes.FETCH_REPORTS_REQUEST,
        SUCCESS: fetchReportsTypes.FETCH_REPORTS_SUCCESS,
        FAILURE: fetchReportsTypes.FETCH_REPORTS_FAILURE,
        CANCEL: fetchReportsTypes.FETCH_REPORTS_CANCEL,
        RESET: fetchReportsTypes.FETCH_REPORTS_RESET,
    },
});
