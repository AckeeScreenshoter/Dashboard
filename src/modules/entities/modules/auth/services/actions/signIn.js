import types from './types';

export const signInRequest = () => ({
    type: types.SIGN_IN_REQUEST,
});

export const signInSuccess = user => ({
    type: types.SIGN_IN_SUCCESS,
    payload: user,
});

export const signInFailure = error => ({
    type: types.SIGN_IN_FAILURE,
    error,
});
