import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import LoginForm from '../components/forms/LoginForm'
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginScreen extends Component {
  render() {
    return (
        <LoginForm
          email={this.props.email}
          password={this.props.password}
          error={this.props.error}
          loading={this.props.loading}
          emailChanged={this.props.emailChanged}
          passwordChanged={this.props.passwordChanged}
          formSubmitted={this.props.loginUser}
        />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading
  }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginScreen);
