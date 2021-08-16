import { apiSelector } from '@ackee/redux-utils';

export const signInApiSelector = state => apiSelector(state, 'signIn');
export const signOutApiSelector = state => apiSelector(state, 'signOut');
