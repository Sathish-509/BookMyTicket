import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';
import * as bookingActions from './../../actions/bookingActions';
import * as eventActions from './../../actions/eventActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DateTimePicker from 'react-datetime-picker';
import SearchBox from 'react-search-box';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      chosenDetails: {},
      searchData: []
    };
    this.handleHide = this.handleHide.bind(this);
    this.saveEvent = this.saveEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleChange = selection => {
    debugger;
    selection ? console.log(selection.full_name) : console.log('reverted');
  };

  setValue(id, value) {
    debugger;
    let { chosenDetails } = this.state;
    chosenDetails.eventdate = new Date();
    switch (id) {
      case 'EVENTNAME':
        chosenDetails.eventname = value;
        break;
      case 'EVENTLOCATION':
        chosenDetails.eventlocation = value;
        break;
      case 'EVENTDATE':
        chosenDetails.eventdate = value;
        break;
    }
    this.setState({ chosenDetails });
  }

  saveEvent() {
    debugger;
    this.setState({ chosenDetails: {}, show: false });
    this.props.actions.createEvent(this.state.chosenDetails);
  }

  render() {
    debugger;
    let searchData = this.props.listOfEvents || [];
    return (
      <div>
        <div className="header">
          <a href="#default" className="logo">
            BookMyTicket
          </a>
          <SearchBox
            data={searchData}
            onChange={this.handleChange}
            placeholder="Search for a string..."
            class="search-class"
            searchKey="eventname"
            width={300}
            height={40}
          />
          <div className="header-right">
            <a href="/">Home</a>
            <a href="/ticketdetails">Ticket Details</a>
            <Button
              bsStyle="primary"
              bsSize="sm"
              onClick={() => this.setState({ show: true })}
              style={{ marginTop: '10px' }}
            >
              Create Event
            </Button>
          </div>
        </div>
        <div className="modal-container">
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
                </div>
                <div className="row">
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
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="eventdate">Event Date: </label>
                      <DateTimePicker
                        onChange={date => this.setValue('EVENTDATE', date)}
                        value={this.state.chosenDetails.eventdate || new Date()}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Close</Button>
              <Button bsStyle="primary" onClick={this.saveEvent}>
                Save Event
              </Button>
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
