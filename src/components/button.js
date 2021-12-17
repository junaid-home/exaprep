import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {$Color, $Typography} from '../styles';

function Button({text}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: $Typography.fonts.robotoCondensed,
    color: $Color.textPrimary,
    backgroundColor: $Color.secondary,
    borderRadius: 100,
    textAlign: 'center',
    paddingVertical: 6,
    paddingHorizontal: 60,
  },
  container: {},
});

export default Button;
