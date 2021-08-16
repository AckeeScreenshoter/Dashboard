import { createSelector } from 'reselect';
export const selectAuthEntities = state => state.entities.auth;

export const authFlowTypeSelector = createSelector(selectAuthEntities, auth => auth.authFlowType);

export const authUserSelector = createSelector(selectAuthEntities, auth => auth.user);
