import { EntityKeys } from "constants/entities";
import { combineReducers } from "redux";
import { entityReducer as reports } from "../../modules/reports";

export default combineReducers({
  [EntityKeys.REPORTS]: reports,
});
