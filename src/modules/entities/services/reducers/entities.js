import { EntityKey } from "constants/entites";
import { combineReducers } from "redux";
import { entityReducer as reports } from "../../modules/reports"

export default combineReducers({
    [EntityKey.REPORTS]: reports
})