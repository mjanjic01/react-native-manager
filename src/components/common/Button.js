import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={style.buttonStyle}
      onPress={onPress}
    >
      <Text style={style.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const style = {
  textStyle: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
