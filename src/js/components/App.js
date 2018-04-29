import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return <Router>
      <div className="App">
        <h1>react-webpack-babel-sass-boilerplate</h1>
      </div>
    </Router>;
  }
}
