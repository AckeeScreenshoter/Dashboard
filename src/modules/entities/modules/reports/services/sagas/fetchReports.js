import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';
// eslint-disable-next-line no-unused-vars
import { firestore } from 'config/firebase';
import { storage } from 'config/firebase';

import * as log from 'config/loglevel';
import { createUIErrorMessage } from '../../../../utils/errors';
import actions, { types } from '../actions';

export function applyFilters(query, filters) {
    for (const [filter, value] of Object.entries(filters || {})) {
        if (String(value).toLowerCase() !== 'all') {
            query = query.where(filter, '==', value);
        }
    }
    return query;
}

async function resolveData(documentSnapshot) {
    const url = await storage.ref(documentSnapshot.id).getDownloadURL();
    return { ...documentSnapshot.data(), image: url, id: documentSnapshot.id };
}

function* fetchReports(action) {
    const filters = action.params;

    try {
        // DO NOT DELETE the limit - it causes exceeding the firebase usage
        const snapshot = yield firestore.collection('messages').limit(5).get();

        const data = [];
        const results = [];

        snapshot.forEach(documentSnapshot => {
            results.push(storage.ref('6HyDpbhbfOqNxxvzTXb8.png').getDownloadURL());
            // TODO :to work with official firebase
            // results.push(storage.ref(documentSnapshot.id).getDownloadURL());
        });
        // eslint-disable-next-line compat/compat
        const downloadURLs = yield Promise.all(results);

        let id = 0;
        snapshot.forEach(documentSnapshot => {
            data.push({ ...documentSnapshot.data(), image: downloadURLs[id], id: documentSnapshot.id });
            id++;
        });

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
            REQUEST: types.FETCH_REPORTS_REQUEST,
            cancelTask: actions.fetchReportsCancel,
        },
        fetchReports,
    );
}
