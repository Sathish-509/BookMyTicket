import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookingDetailsContainer from './containers/BookingDetailsContainer';
import HomePageContainer from './containers/HomePageContainer';
import Header from './components/home/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePageContainer} />
              <Route
                path="/bookingdetails"
                component={BookingDetailsContainer}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
      /*
      <div className="App">
        <header className="App-header">
          <h2>3-State Toggle Switch</h2>
        </header>
        <div className="center">
          <SelectTickets />
        </div>
      </div> */
    );
  }
}

export default App;
