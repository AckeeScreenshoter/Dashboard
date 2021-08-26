import { isEnvDevelopment } from '../constants';

const appName = process.env.REACT_APP_NAME;

const config = {
    api: {
        base: `https://api-${appName}-development.ack.ee/api`,
    },
    appUrl: isEnvDevelopment ? 'http://localhost:3000' : `https://api-${appName}-development.ack.ee`,
    devTools: true,
};

export default config;
