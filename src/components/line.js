import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Line() {
  return (
    <View style={styles.line}>
      <Text>&nbsp;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
    borderRadius: 10,
  },
});

export default Line;
