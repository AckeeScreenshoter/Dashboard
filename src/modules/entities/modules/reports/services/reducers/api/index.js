import { ApiTypes } from "constants/entities";

import { combineReducers } from "redux";

import get from "./get";

export default combineReducers({
  [ApiTypes.GET]: get,
});
