import { types } from '../../actions';

import { AuthFlowType } from '../../../constants';
import { extractUserData } from '../../utils';

const initialState = {
    user: null,
    authFlowType: AuthFlowType.INDETERMINATED,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case types.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: extractUserData(action.payload),
            };

        case types.SET_AUTH_FLOW_TYPE:
            return {
                ...state,
                authFlowType: action.payload,
            };

        default:
            return state;
    }
}
