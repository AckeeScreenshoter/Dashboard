import { ApiTypes, ApiKeys } from "constants/entities";

import { apiSelector } from "@ackee/redux-utils";

export const getReportsApiSelector = (state) => {
  return apiSelector(state, ApiKeys.REPORTS, ApiTypes.GET);
};
