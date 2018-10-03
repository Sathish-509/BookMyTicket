import React from 'react';
import CustomFormGenerator from '../components/CustomFormGenerator';
import * as userSchema from '../schema/userform';

class ContainerCustomForm extends React.Component {
  /* istanbul ignore next */
  constructor(props, context) {
    super(props, context);

    this.state = {};
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {}

  render() {
    return (
      <div>
        <CustomFormGenerator
          schema={userSchema.default}
          handleFormSubmit={this.handleFormSubmit}
          formData={Object.assign({}, {})}
        />
      </div>
    );
  }
}
export default ContainerCustomForm;
