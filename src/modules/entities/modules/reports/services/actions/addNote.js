import { apiRequestActions } from '@ackee/redux-utils';
import { AddNoteTypes } from './types';
export default apiRequestActions(AddNoteTypes, { isDetailRequest: true });
