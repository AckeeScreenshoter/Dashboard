import routingHistory from "@ackee/chris/routing-history";

import api from "./api";
import entities from "./entities";

const { reducer: history } = routingHistory;

// NOTE:
// Do not use combineReducers() here,
// export reducers as plain object, not as a function.
const reducers = {
	api,
	entities,
	history,
};

export default reducers;
