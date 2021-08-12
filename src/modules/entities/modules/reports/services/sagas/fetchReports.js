import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';
// eslint-disable-next-line no-unused-vars
import { firestore } from 'config/firebase';
import * as log from 'config/loglevel';
import { createUIErrorMessage } from '../../../../utils/errors';
import { fetchReports as actions, fetchReportsTypes } from '../actions';

const mockData = [
    { id: 1, url: 'blabla' },
    { id: 2, url: 'blabla2' },
];

function* fetchReports() {
    try {
        // TODO: Use limit and startAt and endAt for pagination - DONT DELETE THE LIMIT - it causes exceeding firestore plan and ban for 1 day
        // TODO: uncomment when quota it not exceeded anymore

        // const collectionRef = yield firestore.collection("messages").limit(25);
        // const data = yield collectionRef.get().then((querySnapshot) => {
        //   querySnapshot.forEach((documentSnapshot) => {
        //     return documentSnapshot.data();
        //   });
        // });
        // TODO: delete when quota it not exceeded anymore
        const data = mockData;

        yield put(actions.fetchReportsSuccess(data));
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
            REQUEST: fetchReportsTypes.FETCH_REPORTS_REQUEST,
            cancelTask: actions.fetchReportsCancel,
        },
        fetchReports,
    );
}
