import React from 'react';
import UpcomingEvents from '../components/home/UpcomingEvents';
import SelectTickets from '../components/chooseSeats/SelectTickets';

class HomePageContainer extends React.Component {
  render() {
    return (
      <div>
        <UpcomingEvents />
        <SelectTickets />
      </div>
    );
  }
}
export default HomePageContainer;
