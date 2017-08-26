import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Button, Card, CardSection, Input, Spinner } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  onLoginFail() {
  }

  onLoginSuccess() {
  }


  renderButton() {
    if (this.props.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
         <CardSection>
          <Input
            label='Email:'
            placeholder='user@cats.io'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
         <CardSection>
          <Input
            secureTextEntry
            label='Password:'
            placeholder='password'
            autoCorrect={false}
            autoCapitalize='none'
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
         <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const style = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
