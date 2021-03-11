import { isServerEnv, isEnvProduction } from "constants/index";

export const plugins = {
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker: isServerEnv && false,

  // Enable Sentry only in prouduction environment
  sentry: isEnvProduction,
};
