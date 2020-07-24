import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducer";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger"
import { reducer as formReducer } from "redux-form";
import mainReducer from "./reducers/mainReducer";


let reducers = combineReducers({
  app: appReducer,
  main: mainReducer,
  form: formReducer
});

const middlewares = [thunkMiddleware, logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

window.__store__ = store;
export default store;