import { React, useSelector, Auth } from '../dependencies';
import Loading from '../components/Loading';
const { AuthFlowType } = Auth.Consts;
const { authFlowTypeSelector } = Auth.selectors;

export default function firewall(AuthContent, PublicContent) {
    return () => {
        const authFlowType = useSelector(authFlowTypeSelector);

        switch (authFlowType) {
            case AuthFlowType.INDETERMINATED:
                return <Loading />;

            case AuthFlowType.ANONYMOUS:
                return <PublicContent />;

            case AuthFlowType.AUTHENTICATED:
                return <AuthContent />;

            default:
                return null;
        }
    };
}
