import { put, takeEvery } from "redux-saga/effects";
import { withScope, captureException } from "@sentry/browser";
import { actionTypes } from "@ackee/lucas";
import { setSentryEventId } from "../actions";

function myCaptureException({ error, extra }) {
  return new Promise((resolve) => {
    withScope((scope) => {
      if (typeof extra === "object") {
        for (const [key, value] of Object.entries(extra)) {
          scope.setExtra(key, value);
        }
      }

      const eventId = captureException(error);

      resolve(eventId);
    });
  });
}

function* errorHandler(action) {
  const eventId = yield myCaptureException(action);

  yield put(setSentryEventId(eventId));
}

export default function* () {
  // LOG_ERROR is dispatched by the errorBoundary HOC (in componentDidCatched method)
  yield takeEvery(actionTypes.logging.LOG_ERROR, errorHandler);
}
