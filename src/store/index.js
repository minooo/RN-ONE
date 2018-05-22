import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { createLogger } from "redux-logger"
import rootReducer from "./reducers";

const isDebuggingInChrome = false;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true
});

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware, logger))

if (isDebuggingInChrome) {
  window.store = store
}

export default store;
