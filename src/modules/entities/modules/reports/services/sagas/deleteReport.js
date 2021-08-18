import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';

import { firestore, storage } from 'config/firebase';
import * as log from 'config/loglevel';
import { createUIErrorMessage } from '../../../../utils/errors';
import actions, { types } from '../actions';

function* deleteReport(action) {
    const { id } = action.meta;
    try {
        yield firestore.collection('messages').doc(id).delete();
        yield storage.ref(id).delete();
        yield put(actions.deleteReportSuccess(id));
    } catch (error) {
        log.error(error);

        const uiError = createUIErrorMessage(error);
        yield put(actions.fetchReportsFailure(uiError));
    }
}

export default function* () {
    yield takeLatestRequest(
        {
            REQUEST: types.DELETE_REPORT_REQUEST,
            cancelTask: actions.deleteReportCancel,
        },
        deleteReport,
    );
}
