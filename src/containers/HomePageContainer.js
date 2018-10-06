import React from 'react';
import UpcomingEvents from '../components/home/UpcomingEvents';
import { connect } from 'react-redux';

class HomePageContainer extends React.Component {
  render() {
    return (
      <div>
        <UpcomingEvents listOfEvents={this.props.listOfEvents} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    listOfEvents: state.event
  };
}

export default connect(
  mapStateToProps,
  null
)(HomePageContainer);
