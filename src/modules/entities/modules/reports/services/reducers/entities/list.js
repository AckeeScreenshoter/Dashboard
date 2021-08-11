import { types } from '../../actions';

export default function listMessagesReducer(state = {}, action) {
    switch (action.type) {
        case types.FETCH_MESSAGES_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
    }
}
