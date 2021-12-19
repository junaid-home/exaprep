import * as React from 'react';
import {View, TextInput as Input, StyleSheet, Text} from 'react-native';
import {$Color, $Typography} from '../styles';

function TextInput({
  placeholder,
  secureTextEntry,
  phone,
  phoneCode = '+92',
  border = 1,
  borderColor = '#707070',
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
      {phone && (
        <View style={styles.phoneContainer}>
          <Text style={styles.phoneText}>{phoneCode}</Text>
        </View>
      )}
      <Input
        style={{
          ...styles.input,
          paddingLeft: phone ? 60 : 18,
          color: color ? color : '#333',
        }}
        placeholderTextColor={color}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 8,
    fontSize: 18,
    fontFamily: $Typography.fonts.robotoCondensed,
  },
  phoneContainer: {
    position: 'absolute',
    backgroundColor: $Color.bluishSecondaryBackground,
    justifyContent: 'center',
    height: '100%',
    borderRadius: 100,
  },
  phoneText: {
    paddingHorizontal: 16,
    fontFamily: $Typography.fonts.robotoCondensedBold,
    color: $Color.bluishTextInputText,
  },
});

export default TextInput;
