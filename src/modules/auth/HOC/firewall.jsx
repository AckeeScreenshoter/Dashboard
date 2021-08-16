import { React, useSelector, Auth } from '../dependencies';

const { AuthFlowType } = Auth.Consts;
const { authFlowTypeSelector } = Auth.selectors;

export default function firewall(AuthContent, PublicContent) {
    return () => {
        const authFlowType = useSelector(authFlowTypeSelector);

        switch (authFlowType) {
            case AuthFlowType.INDETERMINATED:
                return <h1>Loading</h1>;

            case AuthFlowType.ANONYMOUS:
                return <PublicContent />;

            case AuthFlowType.AUTHENTICATED:
                return <AuthContent />;

            default:
                return null;
        }
    };
}
