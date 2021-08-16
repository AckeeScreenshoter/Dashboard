import { sagaEffects, auth, eventChannel } from '../../dependencies';

import { AuthFlowType } from '../../constants';
import { signInSuccess, signOutSuccess, setAuthFlowType } from '../actions';
import { authFlowTypeSelector } from '../selectors';

import { autoSignIn } from './credentialManagement';

const { takeEvery, put, select } = sagaEffects;

function createAuthStateChannel() {
    return eventChannel(emit => {
        return auth.onAuthStateChanged(user => {
            emit({
                user,
            });
        });
    });
}

export default function* () {
    try {
        const authStateChannel = createAuthStateChannel();

        yield takeEvery(authStateChannel, function* ({ user }) {
            yield put(user ? signInSuccess(user) : signOutSuccess());

            const authFlowType = yield select(authFlowTypeSelector);

            if (authFlowType === AuthFlowType.INDETERMINATED) {
                if (!user) {
                    const willbeAutoSignedIn = yield autoSignIn();

                    if (willbeAutoSignedIn) return;
                }

                yield put(setAuthFlowType(user ? AuthFlowType.AUTHENTICATED : AuthFlowType.ANONYMOUS));
            }
        });
    } catch (e) {}
}
