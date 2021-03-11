import { createSelector } from "reselect";

const sentrySelector = (state) => state.sentry;

export const sentryEventIdSelector = createSelector(
  sentrySelector,
  (sentry) => sentry.eventId
);
