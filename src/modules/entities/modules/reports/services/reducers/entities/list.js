import { types } from '../../actions';

const initialState = [];

export default function listReportsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_REPORTS_SUCCESS:
            return [...action.payload];
        case types.ADD_NOTE_SUCCESS:
            const { id, note } = action.meta.id;
            return [...state.map(item => (item.id === id ? { ...item, note: note } : item))];
        case types.DELETE_REPORT_SUCCESS:
            return [...state.filter(item => item.id !== id)];
        default:
            return state;
    }
}
