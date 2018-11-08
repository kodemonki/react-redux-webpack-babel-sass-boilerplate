import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";

import dumbReducer from "./reducers/dumbReducer";

const store = createStore(
  combineReducers({
    dumbReducer
  }), {},
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
