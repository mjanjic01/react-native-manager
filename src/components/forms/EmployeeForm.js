import React, { Component } from 'react';
import { Picker, Text } from 'react-native';

import { Button, Card, CardSection, Input, Spinner } from '../common';

class EmployeeForm extends Component {
  onPropertyChange(prop, value) {
    this.props.formDataUpdate({
      prop,
      value
    })
  }

  onButtonPress() {
    this.props.formSubmitted(this.props.formData);
  }

  componentWillMount() {
    this.props.formDataUpdate({
      prop: 'shift',
      value: 'Monday'
    })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name:"
            placeholder="Jane"
            autoCorrect={false}
            autoCapitalize="words"
            value={this.props.formData.name}
            onChangeText={this.onPropertyChange.bind(this, 'name')}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone:"
            placeholder="555-555-5555"
            autoCorrect={false}
            keyboardType="phone-pad"
            value={this.props.formData.phone}
            onChangeText={this.onPropertyChange.bind(this, 'phone')}
          />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerLabelStyle}>Shift:</Text>
          <Picker
            selectedValue={this.props.formData.shift}
            onValueChange={this.onPropertyChange.bind(this, 'shift')}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}


export default EmployeeForm;
