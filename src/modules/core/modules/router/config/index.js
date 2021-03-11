import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export const routerMiddlewareWithHistory = routerMiddleware(history);

export const connectRouterWithHistory = connectRouter(history);
