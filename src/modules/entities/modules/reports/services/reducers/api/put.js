import { basicApiReducer } from '@ackee/redux-utils';
import { types } from '../../actions';

export default basicApiReducer({
    actionTypes: {
        REQUEST: types.ADD_NOTE_REQUEST,
        SUCCESS: types.ADD_NOTE_SUCCESS,
        FAILURE: types.ADD_NOTE_FAILURE,
        CANCEL: types.ADD_NOTE_CANCEL,
        RESET: types.ADD_NOTE_RESET,
    },
});
