import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import LoginForm from '../components/forms/LoginForm'
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginScreen extends Component {
  onLogin({ email, password }) {
    this.props.loginUser({ email, password })
      .then(Actions.main);
  }

  render() {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset={500}>
          <LoginForm
            email={this.props.email}
            password={this.props.password}
            error={this.props.error}
            loading={this.props.loading}
            emailChanged={this.props.emailChanged}
            passwordChanged={this.props.passwordChanged}
            formSubmitted={this.onLogin.bind(this)}
          />
      </KeyboardAvoidingView>
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
