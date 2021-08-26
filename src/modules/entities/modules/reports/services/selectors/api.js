import { ApiTypes, ApiKeys } from 'constants/entities';

import { apiSelector } from '@ackee/redux-utils';

export const getReportsApiSelector = state => {
    return apiSelector(state, ApiKeys.REPORTS, ApiTypes.GET);
};

export const deleteReportApiSelector = state => {
    return apiSelector(state, ApiKeys.REPORT, ApiTypes.DELETE);
};
export const addNoteApiSelector = state => {
    return apiSelector(state, ApiKeys.REPORT, ApiTypes.PUT);
};
export const fetchReportApiSelector = state => {
    return apiSelector(state, ApiKeys.REPORT, ApiTypes.GET);
};
