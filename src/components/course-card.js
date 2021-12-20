import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/button';
import {$Color, $Typography} from '../styles';

function CourseCard({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{data.name}</Text>
      <Text style={styles.subHeading}>{data.type.toUpperCase()}</Text>
      <Button type="flat" color="primary" fullWidth text="Check Now" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: $Color.foreground,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 7.5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    marginVertical: 10,
    marginHorizontal: 8,
  },
  heading: {
    ...$Typography.smallHeading,
    textAlign: 'center',
    fontSize: 17,
  },
  subHeading: {
    ...$Typography.headingsupportText,
    fontSize: 15,
    marginVertical: 4,
    marginBottom: 7,
    textAlign: 'center',
  },
});

export default CourseCard;
