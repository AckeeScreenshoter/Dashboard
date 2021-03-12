import { isServerEnv } from "constants/index";
import Config from "config";
import { error } from "config/loglevel";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose } from "redux";
import { routerMiddlewareWithHistory } from "../../router";

export default function configureEnhancer() {
  const sagaMiddleware = createSagaMiddleware({
    onError: error,
  });

  const middlewares = [routerMiddlewareWithHistory, sagaMiddleware];
  const enhancerArgs = [applyMiddleware(...middlewares)];

  if (Config.devTools && isServerEnv) {
    // eslint-disable-next-line
    const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (reduxDevTools) {
      enhancerArgs.push(reduxDevTools());
    }
  }

  return {
    enhancer: compose(...enhancerArgs),
    sagaMiddleware,
  };
}
