import { types } from '../../actions';

const initialState = [];

export default function listReportsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_REPORTS_SUCCESS:
            return [...action.payload];
        case types.ADD_NOTE_SUCCESS:
            const { params } = action;
            return [...state.map(item => (item.id === params.id ? { ...item, note: params.note } : item))];
        case types.DELETE_REPORT_SUCCESS:
            const { meta } = action;
            return [...state.filter(item => item.id !== meta.id)];
        default:
            return state;
    }
}
