import { AddNoteTypes as types } from './types';

export const addNoteRequest = params => ({
    type: types.ADD_NOTE_REQUEST,
    params,
});

export const addNoteSuccess = params => ({
    type: types.ADD_NOTE_SUCCESS,
    params,
});

export const addNoteFailure = error => ({
    type: types.ADD_NOTE_FAILURE,
    error,
});

export const addNoteCancel = params => ({
    type: types.ADD_NOTE_CANCEL,
    params,
});

export const addNoteReset = params => ({
    type: types.ADD_NOTE_RESET,
    params,
});
