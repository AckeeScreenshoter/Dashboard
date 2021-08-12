import { types } from "../../actions";

export default function listReportsReducer(state = [], action) {
  switch (action.type) {
    case types.FetchReportsTypes.FETCH_REPORTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
