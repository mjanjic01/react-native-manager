import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { employeeUpdate, employeeCreate } from '../actions';

import EmployeeForm from '../components/forms/EmployeeForm'

class EmployeeCreateScreen extends Component {
  onCreate({ name, phone, shift }) {
    this.props.employeeCreate({ name, phone, shift })
      .then(Actions.employeeList.bind(this, { type: 'reset' }));
  }

  render() {
    return (
        <EmployeeForm
          formData={{
            name: this.props.name,
            phone: this.props.phone,
            shift: this.props.shift
          }}
          formDataUpdate={this.props.employeeUpdate}
          formSubmitted={this.onCreate.bind(this)}
        />
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  return {
    name: employeeForm.name,
    phone: employeeForm.phone,
    shift: employeeForm.shift,
  };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreateScreen);
