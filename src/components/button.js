import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {$Color, $Typography} from '../styles';

function Button({text, type = 'rounded', fullWidth, color = 'secondary'}) {
  let containerStyles;
  if (type === 'rounded') containerStyles = styles.text;

  if (type === 'flat')
    containerStyles = {...styles.text, borderRadius: 10, fontSize: 16};

  if (fullWidth)
    containerStyles = {
      ...containerStyles,
      paddingHorizontal: 0,
      minWidth: '100%',
    };

  return (
    <TouchableOpacity>
      <Text style={{...containerStyles, backgroundColor: $Color[color]}}>
        {text}
      </Text>
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
});

export default Button;
