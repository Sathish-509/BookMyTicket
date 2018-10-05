import React, { Component } from 'react';
import SelectTickets from './components/chooseSeats/SelectTickets';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>3-State Toggle Switch</h2>
        </header>
        <div className="center">
          <SelectTickets />
        </div>
      </div>
    );
  }
}

export default App;
