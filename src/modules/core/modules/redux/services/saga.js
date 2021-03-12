import { default as saga } from "services/sagas";
import { all } from "redux-saga/effects";
import { saga as localizationSaga } from "../../localization";

export default function* rootSaga() {
  yield all([localizationSaga(), saga()]);
}
