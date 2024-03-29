import * as Consts from 'constants/index';
import * as sagaEffects from 'redux-saga/effects';
import { AuthProviders } from 'config/firebase';
import * as logger from 'config/loglevel';

import { signInRequest } from '../actions';

const { put } = sagaEffects;

const GOOGLE_PROVIDER = 'https://accounts.google.com';

export function* autoSignIn(mediation = 'optional') {
    try {
        const credentials = yield navigator.credentials.get({
            federated: {
                providers: [GOOGLE_PROVIDER],
            },
            mediation,
        });

        if (credentials?.type === 'federated' && credentials?.provider === GOOGLE_PROVIDER) {
            AuthProviders.google.setCustomParameters({
                LOGIN_HINT: credentials.id,
            });

            yield put(signInRequest());

            return true;
        }

        return false;
    } catch (error) {
        logger.warn(error);
        return false;
    }
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
