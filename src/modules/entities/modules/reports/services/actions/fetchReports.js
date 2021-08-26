import { FetchReportsTypes as types } from './types';

export const fetchReportsRequest = params => ({
    type: types.FETCH_REPORTS_REQUEST,
    params,
});

export const fetchReportsSuccess = (payload, params) => ({
    type: types.FETCH_REPORTS_SUCCESS,
    payload,
    params,
});

export const fetchReportsFailure = error => ({
    type: types.FETCH_REPORTS_FAILURE,
    error,
});

export const fetchReportsCancel = params => ({
    type: types.FETCH_REPORTS_CANCEL,
    params,
});

export const fetchReportsReset = params => ({
    type: types.FETCH_REPORTS_RESET,
    params,
});
