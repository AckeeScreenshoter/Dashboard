import { React, FormattedMessage, useDispatch, useSelector, Auth } from '../../dependencies';
import { Button } from 'modules/ui';

const Logout = () => {
    const dispatch = useDispatch();
    const signOutApi = useSelector(Auth.selectors.signOutApiSelector);

    return (
        <Button onClick={() => dispatch(Auth.actions.signOutRequest())} loading={signOutApi.inProgress}>
            <FormattedMessage id="button.logout" />
        </Button>
    );
};

// Logout.propTypes = {
//     rules: PropTypes.shape().isRequired,
// };

export default Logout;
