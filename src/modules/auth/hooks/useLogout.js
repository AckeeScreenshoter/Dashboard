import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/auth';

export default function useLogout() {
    const api = useSelector(selectors.signOutApiSelector);
    const dispatch = useDispatch();
    const logout = () => dispatch(actions.signOutRequest());
    return {
        logout,
        api,
    };
}
