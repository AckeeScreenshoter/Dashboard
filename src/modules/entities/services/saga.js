import { all } from 'redux-saga/effects';

import { saga as reports } from '../modules/reports';
import { saga as auth } from '../modules/auth';

export default function* entitiesSaga() {
    yield all([reports(), auth()]);
}
