import { all } from "redux-saga/effects";

import { saga as reports } from "../modules/reports";

export default function* entitiesSaga() {
	yield all([reports()]);
}
