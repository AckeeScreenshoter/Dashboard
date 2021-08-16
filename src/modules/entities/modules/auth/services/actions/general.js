import types from './types';

export const setAuthFlowType = authFlowType => ({
    type: types.SET_AUTH_FLOW_TYPE,
    payload: authFlowType,
});
