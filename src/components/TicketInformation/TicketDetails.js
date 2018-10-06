import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

class TicketDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenDetails: {}
    };
  }

  render() {
    let ticketList =
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
    return <div>{eventList}</div>;
  }
}
export default TicketDetails;
