import { merge } from 'lodash';
import { isEnvDevelopment } from 'constants/index';

const { NODE_ENV, REACT_APP_NAME, REACT_APP_URL } = process.env;
// eslint-disable-next-line
// const envConfig = require(`./config.${BUILD_ENV}.js`).default;
const envConfig = require(`./config.${NODE_ENV}.js`).default;

const defaults = {
    // default configuration goes here
    appName: REACT_APP_NAME,
    appUrl: REACT_APP_URL,
    devTools: isEnvDevelopment,
    api: {
        signIn: '/v1/auth/sign-in',
        me: '/v1/users/me',
        refresh: '/v1/auth/refresh',
    },
    forms: {
        login: 'loginForm',
    },
};

export default merge(defaults, envConfig);
