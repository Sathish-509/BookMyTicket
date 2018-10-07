import React from 'react';
import { Link } from 'react-router-dom';

class UpcomingEvents extends React.Component {
  render() {
    let eventList =
      this.props.listOfEvents &&
      this.props.listOfEvents.map((event, index) => {
        return (
          <li key={index.toString()}>
            <Link to={'/bookingdetails'}>{`Event Name: ${event.eventname} 
            - Event Location: ${event.eventlocation} - Event Date: ${
              event.eventdate
            }`}</Link>
          </li>
        );
      });
    return (
      <div>
        {eventList.length > 0 ? eventList : <h2>Events Coming soon... </h2>}
      </div>
    );
  }
}
export default UpcomingEvents;
