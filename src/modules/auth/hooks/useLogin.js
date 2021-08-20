import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/auth';

export default function useLogin() {
    const api = useSelector(selectors.signInApiSelector);
    const dispatch = useDispatch();
    const signIn = () => dispatch(actions.signInRequest());

    return {
        signIn,
        api,
    };
}
