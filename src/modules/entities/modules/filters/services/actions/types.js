import { EntityKeys } from 'constants/entities';

import { strictObjectAccess, createApiRequestType } from '@ackee/redux-utils';

const modulePrefix = EntityKeys.FILTERS;

export const apiRequestType = createApiRequestType({
    modulePrefix,
});

export const FetchFiltersTypes = apiRequestType({
    typePrefix: 'FETCH_FILTERS_',
});

export default strictObjectAccess({
    ...FetchFiltersTypes,
});
