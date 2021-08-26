const appName = process.env.REACT_APP_NAME;

const config = {
    api: {
        base: `https://api-${appName}-development.ack.ee/api`,
    },
    appUrl: 'http://localhost:3000',
    devTools: true,
};

export default config;
