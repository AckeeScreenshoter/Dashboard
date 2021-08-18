import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';
// eslint-disable-next-line no-unused-vars
import * as log from 'config/loglevel';
import { createUIErrorMessage } from '../../../../utils/errors';
import actions, { types } from '../actions';
import { firestore } from 'config/firebase';

function* fetchFilters() {
    try {
        const snapshot = yield firestore.collection('enums').doc('filters').get();
        const filters = yield snapshot.data();
        yield put(actions.fetchFiltersSuccess(filters));
    } catch (error) {
        log.error(error);

        const uiError = createUIErrorMessage(error);
        yield put(actions.fetchFiltersFailure(uiError));
    }
}

// eslint-disable-next-line
export default function* () {
    yield takeLatestRequest(
        {
            REQUEST: types.FETCH_FILTERS_REQUEST,
            cancelTask: actions.fetchFiltersCancel,
        },
        fetchFilters,
    );
}
