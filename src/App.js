import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookingDetailsContainer from './containers/BookingDetailsContainer';
import HomePageContainer from './containers/HomePageContainer';
import TicketDetailsContainer from './containers/TicketDetailsContainer';
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
              <Route path="/ticketdetails" component={TicketDetailsContainer} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
