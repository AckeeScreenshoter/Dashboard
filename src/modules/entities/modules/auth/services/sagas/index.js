import * as sagaEffects from 'redux-saga/effects';

import signIn from './signIn';
import signOut from './signOut';
import watchState from './watchState';
import retrieveRedirectResult from './retrieveRedirectResult';

const { all } = sagaEffects;

export default function* () {
    yield all([signIn(), signOut(), watchState(), retrieveRedirectResult()]);
}
