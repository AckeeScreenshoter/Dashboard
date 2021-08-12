import { EntityKeys } from "constants/entities";

import { strictObjectAccess, createApiRequestType } from "@ackee/redux-utils";

const modulePrefix = EntityKeys.REPORTS;

export const apiRequestType = createApiRequestType({
  modulePrefix,
});

export const FetchReportsTypes = apiRequestType({
  typePrefix: "FETCH_REPORTS_",
});

export const SinglesTypes = {
  FETCH_REPORTS: `${modulePrefix}/FETCH_REPORTS`,
};

export default strictObjectAccess({
  ...FetchReportsTypes,
  ...SinglesTypes,
});
