import { auth, AuthProviders } from 'config/firebase';
import * as sagaEffects from 'redux-saga/effects';

import { types, signInFailure, signInSuccess, setAuthFlowType } from '../actions';
import { AuthFlowType } from '../../constants';
import { storeCredentials } from './credentialManagement';

const { put, takeLeading } = sagaEffects;

function* signIn() {
    try {
        const result = yield auth.signInWithPopup(AuthProviders.google);

        yield put(signInSuccess(result.user));

        yield put(setAuthFlowType(AuthFlowType.AUTHENTICATED));

        yield storeCredentials(result.user.providerData[0]);
    } catch (e) {
        yield put(signInFailure(e.message));
    }
}

export default function* () {
    yield takeLeading(types.SIGN_IN_REQUEST, signIn);
}
