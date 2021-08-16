import { Consts } from '../../dependencies';
import * as sagaEffects from 'redux-saga/effects';
import { AuthProviders } from 'config/firebase';

import { signInRequest } from '../actions';

const { put } = sagaEffects;

const GOOGLE_PROVIDER = 'https://accounts.google.com';

export function* autoSignIn(mediation = 'optional') {
    const credentials = yield navigator.credentials.get({
        federated: {
            providers: [GOOGLE_PROVIDER],
        },
        mediation,
    });

    if (credentials && credentials.type === 'federated' && credentials.provider === GOOGLE_PROVIDER) {
        AuthProviders.google.setCustomParameters({
            login_hint: credentials.id,
        });

        yield put(signInRequest());

        return true;
    }

    return false;
}

export function* storeCredentials({ displayName, email, photoURL }) {
    if (!Consts.isCredentialManagementSupported) {
        return;
    }

    const cred = yield navigator.credentials.create({
        federated: {
            id: email,
            name: displayName,
            provider: GOOGLE_PROVIDER,
            iconURL: photoURL,
        },
    });

    yield navigator.credentials.store(cred);
}

export function* preventSilentAccess() {
    if (!Consts.isCredentialManagementSupported) {
        return;
    }

    yield navigator.credentials.preventSilentAccess();
}
