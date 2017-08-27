import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

import EmployeeList from '../components/EmployeeList'

class EmployeeListScreen extends Component {
  componentWillMount() {
    this.employees = this.props.employeesFetch();
  }

  render() {
    return (
        <EmployeeList employees={this.props.employees} />
    );
  }
}

const mapPropsToState = ({ employees }) => {
  return {
    employees: employees.data
  };
};

export default connect(mapPropsToState, { employeesFetch })(EmployeeListScreen);
