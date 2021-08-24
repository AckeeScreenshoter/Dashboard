import { ApiTypes, ApiKeys } from 'constants/entities';

import { apiSelector } from '@ackee/redux-utils';

export const getReportsApiSelector = state => {
    return apiSelector(state, ApiKeys.REPORTS, ApiTypes.GET);
};

export const deleteReportApiSelector = state => {
    return apiSelector(state, ApiKeys.REPORTS, ApiTypes.DELETE);
};
export const updateReportApiSelector = state => {
    return apiSelector(state, ApiKeys.REPORTS, ApiTypes.PUT);
};
