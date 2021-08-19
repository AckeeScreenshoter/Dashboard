import * as sagaEffects from 'redux-saga/effects';
import { auth } from 'config/firebase';
import { AuthFlowType } from '../../constants';
import { types, signOutFailure, signOutSuccess, setAuthFlowType } from '../actions';
import { preventSilentAccess } from './credentialManagement';

const { takeLeading, put } = sagaEffects;

function* signout() {
    try {
        yield preventSilentAccess();

        yield auth.signOut();

        yield put(signOutSuccess());

        yield put(setAuthFlowType(AuthFlowType.ANONYMOUS));
    } catch (e) {
        yield put(signOutFailure());
    }
}

export default function* () {
    yield takeLeading(types.SIGN_OUT_REQUEST, signout);
}
