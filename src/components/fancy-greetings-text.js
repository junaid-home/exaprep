import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {$Color, $Typography} from '../styles';

function FancyGreetingsText({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontFamily: $Typography.fonts.meowScript,
    color: $Color.textPrimary,
  },
});

export default FancyGreetingsText;
