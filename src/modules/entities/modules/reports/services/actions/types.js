import { EntityKeys } from 'constants/entities';

import { strictObjectAccess, createApiRequestType } from '@ackee/redux-utils';

const modulePrefix = EntityKeys.REPORTS;

export const apiRequestType = createApiRequestType({
    modulePrefix,
});

export const FetchReportsTypes = apiRequestType({
    typePrefix: 'FETCH_REPORTS_',
});
export const DeleteReportTypes = apiRequestType({
    typePrefix: 'DELETE_REPORT_',
});
export const AddNoteTypes = apiRequestType({
    typePrefix: 'ADD_NOTE_',
});

export default strictObjectAccess({
    ...FetchReportsTypes,
    ...DeleteReportTypes,
    ...AddNoteTypes,
});
