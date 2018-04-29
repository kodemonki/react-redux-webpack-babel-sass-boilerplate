import React from "react";
import {connect} from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    this.props.consoleLog('React dispatch');

    return <Router>
      <div className="App">
        <h1>react-redux-webpack-babel-sass-boilerplate</h1>
        <p>Props from Redux : {this.props.initialised}</p>
      </div>
    </Router>;
  }
}

const mapStateToProps = (state) => {
  return {
    initialised: state.reducer.initialised
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    consoleLog: (message) => {
      dispatch({
        type: "CONSOLE_LOG",
        payload: message
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
