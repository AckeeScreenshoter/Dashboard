import { types } from '../../actions';

const initialState = [];

export default function listReportsReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case types.FETCH_REPORTS_SUCCESS:
            console.log(action.payload);
            return [...action.payload];

        default:
            return state;
    }
}
