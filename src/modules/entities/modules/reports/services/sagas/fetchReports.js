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
    const limit = 20;
    const { lastKey, filters } = yield action.params;
    try {
        let query = yield firestore.collection('messages');
        query = yield applyFilters(query, filters);
        // DO NOT DELETE the limit - it causes exceeding the firebase usage
        const snapshot = yield query
            .limit(limit)
            .orderBy('date', 'desc')
            .startAfter(lastKey ? lastKey : '')
            .get();

        const lastVisible = snapshot.docs[snapshot.docs.length - 1];

        const data = yield Promise.all(
            snapshot.docs.map(documentSnapshot => {
                return resolveData(documentSnapshot);
            }),
        );
        const hasNext = data.length === 0 ? false : true;

        yield put(actions.fetchReportsSuccess(data, { filters, lastKey: lastVisible, hasNext }));
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
