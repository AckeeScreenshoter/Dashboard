import { all } from 'redux-saga/effects';
import { saga } from 'modules/entities';

export default function* appSaga() {
    yield all([saga()]);
}
