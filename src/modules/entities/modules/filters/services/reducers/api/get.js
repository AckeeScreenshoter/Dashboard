import { basicApiReducer } from '@ackee/redux-utils';
import { types } from '../../actions';

export default basicApiReducer({
    actionTypes: {
        REQUEST: types.FETCH_FILTERS_REQUEST,
        SUCCESS: types.FETCH_FILTERS_SUCCESS,
        FAILURE: types.FETCH_FILTERS_FAILURE,
        CANCEL: types.FETCH_FILTERS_CANCEL,
        RESET: types.FETCH_FILTERS_RESET,
    },
});
