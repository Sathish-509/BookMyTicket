import React from 'react';

class CustomFormGenerator extends React.Component {
  /* istanbul ignore next */
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return <div>{JSON.stringify(this.props.schema)}</div>;
  }
}
export default CustomFormGenerator;
