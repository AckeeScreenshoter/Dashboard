import { fetchReportsTypes } from '../../actions';

export default function listReportsReducer(state = [], action) {
    switch (action.type) {
        case fetchReportsTypes.FETCH_REPORTS_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}
