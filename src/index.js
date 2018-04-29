import React from "react";
import ReactDOM from "react-dom";
import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {
  Provider
} from "react-redux";
import {
  createLogger
} from "redux-logger";

import App from "./js/components/App";
import './styles/appStyles.scss';

const initialState = {
  initialised: "initialised"
};

const reducer = (state = initialState, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "CONSOLE_LOG":
      console.log("CONSOLE_LOG "+action.payload);
      break;
  }
  return newState;
}

const store = createStore(
  combineReducers({
    reducer
  }), {},
  applyMiddleware(createLogger())
);

store.dispatch({
  type: "CONSOLE_LOG",
  payload: "Redux dispatch"
});

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider> , document.getElementById("App"));
