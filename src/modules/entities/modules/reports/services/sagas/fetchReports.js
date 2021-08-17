import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';
// eslint-disable-next-line no-unused-vars
import { firestore } from 'config/firebase';
import { storage } from 'config/firebase';

import * as log from 'config/loglevel';
import { createUIErrorMessage } from '../../../../utils/errors';
import actions, { types } from '../actions';

function* fetchReports() {
    try {
        const snapshot = yield firestore.collection('messages').limit(5).get();
        const data = [];
        const results = [];

        snapshot.forEach(documentSnapshot => {
            results.push(storage.ref(documentSnapshot.id).getDownloadURL());
        });
        const downloadURLs = yield Promise.all(results);

        let id = 0;
        snapshot.forEach(documentSnapshot => {
            data.push({ ...documentSnapshot.data(), image: downloadURLs[id] });
            id++;
        });

        yield put(actions.fetchReportsSuccess(data));

        // const collectionRef = yield firestore.collection('messages').limit(25);
        // const data = yield collectionRef.get().then(querySnapshot => {
        //     querySnapshot.forEach(documentSnapshot => {
        //         console.log(documentSnapshot.data());
        //         return documentSnapshot.data();
        //     });
        // });
        // TODO: delete when quota it not exceeded anymore
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
