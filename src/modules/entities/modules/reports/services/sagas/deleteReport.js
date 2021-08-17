import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';

import { firestore } from 'config/firebase';
import * as log from 'config/loglevel';
import { createUIErrorMessage } from '../../../../utils/errors';
import actions, { types } from '../actions';

function* deleteReport(id) {
    try {
        yield firestore.collection('messages').doc(id).delete;
        yield put(actions.deleteReportSuccess());
    } catch (error) {
        log.error(error);

        const uiError = createUIErrorMessage(error);
        yield put(actions.fetchReportsFailure(uiError));
    }
}

export default function* () {
    yield takeLatestRequest(
        {
            DELETE: types.DELETE_REPORT_REQUEST,
            cancelTask: actions.deleteReportCancel,
        },
        deleteReport,
    );
}
