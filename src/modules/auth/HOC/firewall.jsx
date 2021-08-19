import { React, useSelector, Auth } from '../dependencies';
import Loader from 'modules/ui/components/Loader';
const { AuthFlowType } = Auth.Consts;
const { authFlowTypeSelector } = Auth.selectors;

export default function firewall(AuthContent, PublicContent) {
    return () => {
        const authFlowType = useSelector(authFlowTypeSelector);

        switch (authFlowType) {
            case AuthFlowType.INDETERMINATED:
                return <Loader show={true} />;

            case AuthFlowType.ANONYMOUS:
                return <PublicContent />;

            case AuthFlowType.AUTHENTICATED:
                return <AuthContent />;
                x;

            default:
                return null;
        }
    };
}
