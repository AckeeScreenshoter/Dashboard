import { createApiRequestType, strictObjectAccess } from '../../dependencies';

const apiRequestType = createApiRequestType({
    modulePrefix: 'auth',
});

export default strictObjectAccess({
    ...apiRequestType({
        typePrefix: 'SIGN_IN_',
    }),
    ...apiRequestType({
        typePrefix: 'SIGN_OUT_',
    }),
    ...apiRequestType({
        types: ['SET_AUTH_FLOW_TYPE'],
    }),
});
