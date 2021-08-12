import { put } from "redux-saga/effects";
import { takeLatestRequest } from "@ackee/antonio-utils";
import { firestore } from "config/firebase";
import * as log from "config/loglevel";
import {
	fetchMessages as actions,
	types as fetchMessagesTypes,
} from "../actions";

function* fetchReports() {
	try {
		const { data } = yield firestore.collection("messages");
		yield put(actions.fetchMessagesSuccess(data));
	} catch (error) {
		log.error(error);

		// const uiError = createUIErrorMessage(error);
		// yield put(actions.fetchMessagesFailure(uiError));
	}
}

export default function* () {
	yield takeLatestRequest(
		{
			REQUEST: fetchMessagesTypes.FETCH_MESSAGES_REQUEST,
			cancelTask: actions.fetchMessagesCancel,
		},
		fetchReports
	);
}
