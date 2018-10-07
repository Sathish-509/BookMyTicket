import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class FieldSetComponent extends Component {
  state = {
    chosenDetails: this.props.chosenDetails
  };

  componentWillReceiveProps(nextProps) {
    if (Array.isArray(nextProps.chosenDetails)) {
      this.setState({
        chosenDetails: JSON.parse(JSON.stringify(nextProps.chosenDetails))
      });
    }
  }

  setValue(id, value, index) {
    let { chosenDetails } = this.state;
    switch (id) {
      case 'NAME':
        chosenDetails[index].name = value;
        break;
      case 'AGE':
        chosenDetails[index].age = value;
        break;
    }
    this.setState({ chosenDetails });
  }

  getFieldSetDetails() {
    let { chosenDetails } = this.state;

    return chosenDetails.map((chosenDetail, index) => {
      return (
        <div className="offset-sm-3 field-set">
          <legend>Seat No : {chosenDetail.seatNo}</legend>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <FormControl
                  type="text"
                  value={chosenDetail.name || ''}
                  onChange={e =>
                    this.setValue('NAME', e.currentTarget.value, index)
                  }
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <FormControl
                  type="text"
                  value={chosenDetail.age || ''}
                  onChange={e =>
                    this.setValue('AGE', e.currentTarget.value, index)
                  }
                />
              </div>
            </div>
            <div className="col-sm-4" style={{ marginTop: '37px' }}>
              <div>
                <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                  Seat No
                </label>
                <span className="view">{chosenDetail.seatNo}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    let { chosenDetails } = this.state;

    if (Array.isArray(chosenDetails)) {
      return [
        this.getFieldSetDetails(),
        <div className="offset-sm-3 text-center">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => this.props.onFieldSetSave(this.state.chosenDetails)}
          >
            Save
          </button>
        </div>
      ];
    } else {
      return 'Please chose seats';
    }
  }
}
