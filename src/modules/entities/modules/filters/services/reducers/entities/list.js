import { types } from '../../actions';

const initialState = [];
export default function listFiltersReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_FILTERS_SUCCESS:
            return { ...action.payload };
        default:
            return state;
    }
}
