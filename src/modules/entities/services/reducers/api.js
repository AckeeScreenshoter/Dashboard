import { combineReducers } from "redux";
import { ApiKeys } from "../../../../constants";
import { apiReducer as reports } from "../../modules/reports";

export default combineReducers({
  [ApiKeys.REPORTS]: reports,
});
