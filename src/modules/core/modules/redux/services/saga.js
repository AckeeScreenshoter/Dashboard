import { default as saga } from "services/sagas";
import { all } from "redux-saga/effects";
import { saga as localizationSaga } from "../../localization";
import { saga as sentrySaga } from "../../sentry";

export default function* rootSaga() {
  yield all([sentrySaga(), localizationSaga(), saga()]);
}
