import { put } from 'redux-saga/effects';
import { takeLatestRequest } from '@ackee/antonio-utils';

import { firestore } from 'config/firebase';
import * as log from 'config/loglevel';

import { createUIErrorMessage } from '../../../../utils/errors';
import actions, { types } from '../actions';

function* addNote(action) {
    const report = action.meta.id;
    try {
        yield firestore.collection('messages').doc(report.id).update({ note: report.note });
        yield put(actions.addNoteSuccess(report));
    } catch (error) {
        log.error(error);
        const uiError = createUIErrorMessage(error);
        yield put(actions.fetchReportsFailure(uiError));
    }
}

export default function* () {
    yield takeLatestRequest(
        {
            REQUEST: types.ADD_NOTE_REQUEST,
            cancelTask: actions.addNoteCancel,
        },
        addNote,
    );
}
