import React from 'react';
import { Text, View } from 'react-native';

import Card from './Card';

const CardSection = (props) => {

  return (
    <View style={style.containerStyle}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#DDDDDD',
    position: 'relative'
  }
};


export { CardSection };
