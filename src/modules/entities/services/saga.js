import { all } from 'redux-saga/effects';

import { saga as messages } from '../modules/reports';

export default function* entitiesSaga() {
    yield all([messages()]);
}
