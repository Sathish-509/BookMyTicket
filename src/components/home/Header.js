import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import * as bookingActions from './../../actions/bookingActions';
import * as eventActions from './../../actions/eventActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      chosenDetails: {}
    };
    this.handleHide = this.handleHide.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
  }
  handleHide() {
    this.setState({ show: false });
  }
  setValue(id, value) {
    debugger;
    let { chosenDetails } = this.state;
    switch (id) {
      case 'EVENTNAME':
        chosenDetails.eventname = value;
        break;
      case 'EVENTLOCATION':
        chosenDetails.eventlocation = value;
        break;
    }
    this.setState({ chosenDetails });
  }
  saveEvent() {
    debugger;
    this.props.actions.createEvent(this.state.chosenDetails);
  }
  render() {
    return (
      <div>
        <div className="header">
          <a href="#default" className="logo">
            BookMyTicket
          </a>
          <div className="header-right">
            <a className="active" href="/">
              Home
            </a>
            <a href="/bookingdetails">Booked Details</a>
            <Button
              bsStyle="primary"
              bsSize="medium"
              onClick={() => this.setState({ show: true })}
            >
              Create Event
            </Button>
          </div>
        </div>
        <div className="modal-container">
          {/*<Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true })}
          >
            Create Event
          </Button>
          */}
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
                Enter Event Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="offset-sm-3 field-set">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="eventname">Event Name: </label>
                      <FormControl
                        type="text"
                        value={this.state.chosenDetails.eventname || ''}
                        onChange={e =>
                          this.setValue('EVENTNAME', e.currentTarget.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="eventlocation">Event Location: </label>
                      <FormControl
                        type="text"
                        value={this.state.chosenDetails.eventlocation || ''}
                        onChange={e =>
                          this.setValue('EVENTLOCATION', e.currentTarget.value)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
              <Button onClick={this.saveEvent}>Save Event</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  debugger;
  return {
    listOfEvents: state.event,
    bookings: state.booking
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { ...bookingActions, ...eventActions },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
