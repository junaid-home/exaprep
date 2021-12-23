import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import HomeIcon from '../assets/icons/home.svg';
import PersonIcon from '../assets/icons/person.svg';
import SchoolIcon from '../assets/icons/school.svg';

import {$Color} from '../styles';

function Footer({onHomeClicked, onResultsClicked, onProfileClicked}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onHomeClicked}>
        <HomeIcon style={{padding: 10}} />
      </TouchableOpacity>
      <View style={styles.middleIconContainer}>
        <TouchableOpacity onPress={onResultsClicked}>
          <View style={styles.middleIcon}>
            <SchoolIcon />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onProfileClicked}>
        <PersonIcon style={{padding: 10}} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    boxSizing: 'border-box',
    backgroundColor: $Color.foreground,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 18,
    elevation: 3,
  },
  middleIconContainer: {
    position: 'absolute',
    borderRadius: 100,
    padding: 10,
    left: '55%',
    top: -25,
    backgroundColor: $Color.foreground,
  },
  middleIcon: {
    padding: 16,
    borderRadius: 100,
    backgroundColor: $Color.primary,
  },
});

export default Footer;
