import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';

import { firestore, storage } from 'config/firebase';
import * as log from 'config/loglevel';

import { createUIErrorMessage } from '../../../../utils/errors';
import actions, { types } from '../actions';

function* fetchReport(action) {
    const { id } = action.meta;
    try {
        const documentSnapshot = yield firestore.collection('messages').doc(id).get();
        const url = yield storage.ref(documentSnapshot.id).getDownloadURL();

        yield put(actions.fetchReportSuccess(id, { ...documentSnapshot.data(), image: url, id: documentSnapshot.id }));
    } catch (error) {
        log.error(error);
        const uiError = createUIErrorMessage(error);
        yield put(actions.fetchReportFailure(uiError));
    }
}

export default function* () {
    yield takeLatestRequest(
        {
            REQUEST: types.FETCH_REPORT_REQUEST,
            cancelTask: actions.fetchReportCancel,
        },
        fetchReport,
    );
}
