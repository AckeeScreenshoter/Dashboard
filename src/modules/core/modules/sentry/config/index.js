import * as Sentry from "@sentry/browser";
import { isServerEnv } from "constants/index";
import { warn } from "config/loglevel";
import createSentryMiddleware from "redux-sentry-middleware";

// ERROR: Attempted import error: 'sentry' is not exported from 'config'.
// import { sentry, appName } from "config";

const { REACT_APP_NAME } = process.env;

const options = {
  dsn: "",
  debug: false,
  environment: process.env.NODE_ENV,
  release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
};

if (!options.dsn && !isServerEnv) {
  const projectName = window.encodeURIComponent(REACT_APP_NAME);
  // const projectName = window.encodeURIComponent(Config.appName);
  const url = `https://sentry.ackee.cz/settings/ackee-production/projects/${projectName}/keys/`;

  warn(`[Sentry]: Add your project 'dsn' to 'src/config/config.js.\n${url}`);
}

export const initializeSentry = () => {
  const init = () => Sentry.init(options);

  !isServerEnv && window.requestIdleCallback
    ? window.requestIdleCallback(init)
    : init();
};

// docs: https://github.com/vidit-sh/redux-sentry-middleware#sentry-middleware-for-redux
export const sentryMiddleware = createSentryMiddleware(Sentry, {
  // !!! YOU MAY NOT WANT TO SEND SOME SENSITIVE DATA TO SENTRY
  actionTransformer: (action) => action,
  stateTransformer: (state) => state,
});
