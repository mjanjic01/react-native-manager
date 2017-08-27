import React, { Component } from 'react';
import { Text } from 'react-native';

import { CardSection } from './common';


class ListItem extends Component {
  render() {
    return (
      <CardSection>
        <Text style={style.titleStyle}>
          {this.props.employee.name}
        </Text>
      </CardSection>
    );
  }
}

const style = {
  titleStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
};

export default ListItem;
