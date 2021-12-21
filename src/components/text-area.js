import * as React from 'react';
import {View, TextInput as Input, StyleSheet} from 'react-native';
import {$Color, $Typography} from '../styles';

function TextArea({
  placeholder,
  border = 3,
  borderColor = $Color.secondary,
  color = '#707070',
  backgroundColor = $Color.foreground,
}) {
  return (
    <View
      style={{
        ...styles.contianer,
        backgroundColor,
        borderWidth: border,
        borderColor,
      }}>
      <Input
        style={{
          ...styles.input,
          paddingLeft: 18,
          color: color ? color : '#333',
        }}
        multiline
        numberOfLines={8}
        placeholderTextColor={color}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 18,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontFamily: $Typography.fonts.robotoCondensed,
  },
});

export default TextArea;
