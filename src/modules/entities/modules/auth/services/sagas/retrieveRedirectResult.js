import { auth, sagaEffects } from '../../dependencies';

import { AuthFlowType } from '../../constants';
import { signInSuccess, signInFailure, setAuthFlowType } from '../actions';
import { storeCredentials } from './credentialManagement';
import { Consts } from '../../dependencies';
const { put } = sagaEffects;

export default function* () {
    try {
        // NOTE: signInWithRedirect is set only for mobile devices.
        if (!Consts.isMobileDevice) {
            return;
        }

        const result = yield auth.getRedirectResult();

        if (result.user) {
            yield put(signInSuccess(result.user));

            yield put(setAuthFlowType(AuthFlowType.AUTHENTICATED));

            yield storeCredentials(result.user.providerData[0]);
        }
    } catch (e) {
        // TODO: handle firebase/auth errors

        yield put(signInFailure(e.message));
    }
}
