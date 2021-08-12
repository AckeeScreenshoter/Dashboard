import { types } from "../../actions";

export default function listMessagesReducer(state = { test: "test" }, action) {
	switch (action.type) {
		case types.FETCH_MESSAGES_SUCCESS:
			return {
				...state,
				...action.payload,
			};

		default:
			return state;
	}
}
