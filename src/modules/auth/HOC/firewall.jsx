import React from 'react';
import { useSelector } from 'react-redux';

import * as Auth from 'modules/entities/modules/auth';
import { Loader } from 'modules/ui';

const { AuthFlowType } = Auth.Consts;
const { authFlowTypeSelector } = Auth.selectors;

export default function firewall(AuthContent, PublicContent) {
    return () => {
        const authFlowType = useSelector(authFlowTypeSelector);

        switch (authFlowType) {
            case AuthFlowType.INDETERMINATED:
                return <Loader show={true} />;

            case AuthFlowType.AUTHENTICATED:
                return <PublicContent />;

            case AuthFlowType.ANONYMOUS:
                return <AuthContent />;

            default:
                return null;
        }
    };
}
