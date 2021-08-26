import { types } from '../../actions';

const initialState = {
    data: [],
    params: {
        lastKey: '',
        filters: [],
    },
};

export default function listReportsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_REPORTS_SUCCESS:
            console.log(state.params.reset);

            return {
                data:
                    state.length === 0 || state.params.reset ? [...action.payload] : [...state.data, ...action.payload],
                params: action.params,
            };

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
