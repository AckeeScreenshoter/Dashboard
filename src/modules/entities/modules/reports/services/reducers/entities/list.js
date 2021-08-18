import { types } from '../../actions';

const initialState = [];

export default function listReportsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_REPORTS_SUCCESS:
            return [...action.payload];

        case types.DELETE_REPORT_SUCCESS:
            const { id } = action.meta;

            return [...state.filter(item => item.id !== id)];
        default:
            return state;
    }
}
