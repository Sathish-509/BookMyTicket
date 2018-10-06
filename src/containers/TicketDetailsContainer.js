import React from 'react';
import { connect } from 'react-redux';
import TicketDetails from './../components/TicketInformation/TicketDetails';

class TicketDetailsContainer extends React.Component {
  render() {
    this.props.listOfBookings;
    return (
      <div>
        <TicketDetails />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    listOfBookings: state.booking
  };
}

export default connect(mapStateToProps)(TicketDetailsContainer);
