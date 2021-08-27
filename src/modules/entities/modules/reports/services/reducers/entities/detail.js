import { types } from '../../actions';

const initialState = [];

export default function singleReportsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_REPORT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
