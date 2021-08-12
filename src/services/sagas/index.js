import { all } from "redux-saga/effects";
import { saga as reports } from "modules/entities";

export default function* appSaga() {
  yield all([reports()]);
}
