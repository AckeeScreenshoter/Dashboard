import types from './types';

export const signOutRequest = () => ({
    type: types.SIGN_OUT_REQUEST,
});

export const signOutSuccess = user => ({
    type: types.SIGN_OUT_SUCCESS,
    payload: user,
});

export const signOutFailure = error => ({
    type: types.SIGN_OUT_FAILURE,
    error,
});
