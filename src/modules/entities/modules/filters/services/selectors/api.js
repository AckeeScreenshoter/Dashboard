import { ApiTypes, ApiKeys } from 'constants/entities';

import { apiSelector } from '@ackee/redux-utils';

export const getFiltersApiSelector = state => {
    return apiSelector(state, ApiKeys.FILTERS, ApiTypes.GET);
};
