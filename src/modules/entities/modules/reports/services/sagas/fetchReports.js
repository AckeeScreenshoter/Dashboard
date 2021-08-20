import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';
// eslint-disable-next-line no-unused-vars
import { firestore } from 'config/firebase';
import { storage } from 'config/firebase';

import * as log from 'config/loglevel';
import { createUIErrorMessage } from '../../../../utils/errors';
import actions, { types } from '../actions';

async function resolveData(documentSnapshot) {
    const url = await storage.ref('6HyDpbhbfOqNxxvzTXb8.png').getDownloadURL();
    return { ...documentSnapshot.data(), image: url, id: documentSnapshot.id };
}

function* fetchReports() {
    try {
        // // DO NOT DELETE the limit - it causes exceeding the firebase usage
        const snapshot = yield firestore.collection('messages').limit(5).get();
        const data = yield Promise.all(snapshot.docs.map(resolveData));
        console.log(data);
        yield put(actions.fetchReportsSuccess(''));
    } catch (error) {
        log.error(error);

        const uiError = createUIErrorMessage(error);
        yield put(actions.fetchReportsFailure(uiError));
    }
}

// eslint-disable-next-line
export default function* () {
    yield takeLatestRequest(
        {
            REQUEST: types.FETCH_REPORTS_REQUEST,
            cancelTask: actions.fetchReportsCancel,
        },
        fetchReports,
    );
}
