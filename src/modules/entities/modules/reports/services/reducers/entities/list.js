import { types } from '../../actions';

const initialState = {
    data: [],
    params: {
        lastKey: 0,
        filters: [],
        hasNext: true,
    },
};

export default function listReportsReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_REPORTS_SUCCESS:
            return {
                data: [...state.data, ...action.payload],
                params: { ...action.params },
            };

        case types.FETCH_REPORTS_RESET:
            return initialState;

        case types.ADD_NOTE_SUCCESS:
            const { params } = action;
            return {
                data: [...state.data.map(item => (item.id === params.id ? { ...item, note: params.note } : item))],
                params: { ...action.params },
            };

        case types.DELETE_REPORT_SUCCESS:
            const { meta } = action;
            return { ...state, data: [...state.data.filter(item => item.id !== meta.id)] };
        case types.FETCH_REPORT_RESET:
            return initialState;
        default:
            return state;
    }
}
