import { call, put } from 'redux-saga/effects';
import { noop } from 'lodash';

import config from 'config';
import { firestore } from 'config/firebase';
import * as log from 'config/loglevel';
import takeLatestRequest from 'services/sagas/takeLatestRequest';
import { createUIErrorMessage } from 'modules/errors';
import { fetchMessages as actions, types as fetchMessagesTypes } from '../actions';

function* fetchReports() {
    try {
        const { data } = yield firestore.collection('messages');
        yield put(actions.fetchMessagesSuccess(data));
    } catch (error) {
        log.error(error);

        const uiError = createUIErrorMessage(error);
        yield put(actions.fetchMessagesFailure(uiError));
    }
}

export default function* () {
    yield takeLatestRequest(
        () => 'fetchMessagesRequest',
        {
            pattern: fetchMessagesTypes.FETCH_MESSAGES_REQUEST,
            handler: fetchReports,
        },
        {
            pattern: fetchMessagesTypes.FETCH_MESSAGES_CANCEL,
            handler: noop,
        },
    );
}
