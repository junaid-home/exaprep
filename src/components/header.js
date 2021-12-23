import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {$Color, $Typography} from '../styles';

import Menu from '../assets/icons/menu.svg';
import Settings from '../assets/icons/settings.svg';

function Header({onMenuClicked, onGearClicked}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuClicked}>
        <Menu style={{cursor: 'pointer', padding: 5}} />
      </TouchableOpacity>
      <View style={styles.logoText}>
        <Text onPress={onMenuClicked} style={styles.logoTextPrimary}>
          EXA
        </Text>
        <Text style={styles.logoTextSecondary}>PREP</Text>
      </View>
      <TouchableOpacity onPress={onGearClicked}>
        <Settings />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: $Color.foreground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7.5,
    elevation: 0.4,
  },
  logoText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoTextPrimary: {
    ...$Typography.logoTextBase,
    color: $Color.primary,
  },
  logoTextSecondary: {
    ...$Typography.logoTextBase,
    color: $Color.secondary,
  },
});

export default Header;
