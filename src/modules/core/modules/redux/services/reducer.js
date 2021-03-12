import reducers from "services/reducers";
import { reducer as translateReducer } from "../../localization";
import { combineReducers } from "redux";
import { connectRouterWithHistory } from "../../router";

export default combineReducers({
  ...reducers,
  translate: translateReducer,
  router: connectRouterWithHistory,
});
