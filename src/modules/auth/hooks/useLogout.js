import { useDispatch, useSelector } from 'react-redux';
import { selectors, actions } from 'modules/entities/modules/auth';

export default function useLogout() {
    const api = useSelector(selectors.signOutApiSelector);
    const dispatch = useDispatch();
    const logout = () => console.log('logout');
    return {
        logout,
        api,
    };
}
