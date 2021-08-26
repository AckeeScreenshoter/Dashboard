import { FetchReportTypes } from './types';
import { apiRequestActions } from '@ackee/redux-utils';

export default apiRequestActions(FetchReportTypes, { isDetailRequest: true });
