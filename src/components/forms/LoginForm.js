import React, { Component } from 'react';
import { Text } from 'react-native';

import { Button, Card, CardSection, Input, Spinner } from '../common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.formSubmitted({ email, password });
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
        {this.props.error.length > 0 &&
          <CardSection>
            <Text style={style.errorTextStyle}>
              {this.props.error}
            </Text>
          </CardSection>
        }
         <CardSection>
         {this.props.loading ? (
            <Spinner size='small' />
         ) : (
            <Button onPress={this.onButtonPress.bind(this)}>
              Log in
            </Button>
          )}
        </CardSection>
      </Card>
    );
  }
}

const style = {
  errorTextStyle: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  }
}

export default LoginForm;
