import routingHistory from "@ackee/chris/routing-history";

import { apiReducer } from "modules/entities";
import { entityReducer } from "modules/entities"

const { reducer: history } = routingHistory;

// NOTE:
// Do not use combineReducers() here,
// export reducers as plain object, not as a function.
const reducers = {
  api: apiReducer,
  entities: entityReducer,
  history,
};

export default reducers;
