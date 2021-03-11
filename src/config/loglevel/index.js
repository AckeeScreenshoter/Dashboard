import * as loglevel from "loglevel";
import { captureException } from "@sentry/browser";
import { isEnvProduction } from "constants/index";

isEnvProduction ? loglevel.disableAll() : loglevel.enableAll();

export const { warn, info, trace, debug } = loglevel;

export const error = (err) => {
  loglevel.error(err);
  captureException(err);
};
