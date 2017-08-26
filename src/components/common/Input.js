import React from 'react';
import { View, TextInput ,Text } from 'react-native';

const Input = ({label, placeholder, secureTextEntry, autoCorrect, autoCapitalize, keyboardType, value, onChangeText}) => {
  const { inputStyle, containerStyle, labelStyle } = style;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const style = {
  inputStyle: {
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },

  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};


export { Input };
