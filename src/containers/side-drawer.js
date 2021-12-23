import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import AddIcon from '../assets/icons/add.svg';
import InfoIcon from '../assets/icons/info.svg';
import SuiteCaseIcon from '../assets/icons/suitecase.svg';
import DonutIcon from '../assets/icons/donut.svg';
import WarningIcon from '../assets/icons/warning.svg';
import ExtensionIcon from '../assets/icons/extension.svg';
import ShareIcon from '../assets/icons/white-share.svg';

import Button from '../components/button';
import Line from '../components/line';

import {$Color, $Typography} from '../styles';

function SideDrawer() {
  return (
    <View style={styles.contianer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.img}
          source={require('../assets/images/avatar.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameHeading}>John Ibrahim</Text>
          <Text style={styles.emailText}>john.ibh@gmail.com</Text>
        </View>
      </View>
      <Line />
      <View style={styles.ListItemsContainer}>
        <ListItem icon={AddIcon} text="Add New Question" />
        <ListItem icon={SuiteCaseIcon} text="Saved Questions" />
        <ListItem icon={InfoIcon} text="Report Question" />
      </View>
      <Line />
      <View style={styles.ListItemsContainer}>
        <ListItem icon={DonutIcon} text="Rate This App" />
        <ListItem icon={ExtensionIcon} text="Remove Ads" />
        <ListItem icon={WarningIcon} text="Feedback" />
        <ListItem icon={ShareIcon} text="Share This App" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Button type="outlined" text="Logout" />
      </TouchableOpacity>
    </View>
  );
}

function ListItem({icon: Icon, text}) {
  return (
    <View style={styles.listItemContainer}>
      <Icon />
      <Text style={styles.listItemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: $Color.primary,
    flex: 1,
  },
  avatarContainer: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  nameHeading: {
    ...$Typography.smallHeading,
    color: $Color.foreground,
    fontSize: 20,
  },
  emailText: {
    ...$Typography.headingsupportText,
    color: $Color.foreground,
    fontSize: 14,
  },
  ListItemsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7.5,
  },
  listItemText: {
    ...$Typography.smallHeading,
    fontFamily: $Typography.fonts.robotoCondensed,
    color: $Color.foreground,
    marginLeft: 12,
  },
  button: {
    width: 155,
    paddingHorizontal: 15,
    marginTop: 'auto',
    paddingVertical: 40,
  },
});

export default SideDrawer;
