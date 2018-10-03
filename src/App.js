import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// @flow
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> testing and save to
          reload.
        </p>
      </div>
    );
  }
}

export default App;
