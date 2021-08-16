import { fetchReportsTypes } from '../../actions';

const initialState = [];

export default function listReportsReducer(state = initialState, action) {
    switch (action.type) {
        case fetchReportsTypes.FETCH_REPORTS_SUCCESS:
            return [...action.payload];

        default:
            return state;
    }
}
