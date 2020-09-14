import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import appReducer from "./reducers/appReducer";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger"
import pizzasReducer from "./reducers/pizzasReducer";
import filtersReducer from "./reducers/filtersReducer";
import cartReducer from "./reducers/cartReducer";


let rootReducer = combineReducers({
  app: appReducer,
  pizzas: pizzasReducer,
  filters: filtersReducer,
  cart: cartReducer
});

const middlewares = [thunkMiddleware, logger]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

window.__store__ = store;
export default store;