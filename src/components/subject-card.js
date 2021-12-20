import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {$Typography} from '../styles';

function SubjectCard({data}) {
  return (
    <TouchableOpacity style={{...styles.container, backgroundColor: data.code}}>
      <Image
        style={styles.img}
        source={require('../assets/images/notes.png')}
      />
      <Text style={styles.heading}>{data.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    margin: 8,
    borderRadius: 20,
    width: '45%',
    paddingVertical: 20,
    elevation: 0.5,
  },
  heading: {
    ...$Typography.mainHeading,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    color: '#444',
  },
  img: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default SubjectCard;
