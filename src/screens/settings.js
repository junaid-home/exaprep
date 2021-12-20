import * as React from 'react';
const {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
} = require('react-native');

import Header from '../components/header';
import Footer from '../components/footer';
import Line from '../components/line';

import {$Color, $Typography} from '../styles';

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <ScrollView contentContainerStyle={styles.statusbar}>
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <Text style={styles.heading}>APP Notifications</Text>
            <Text style={styles.subText}>comming soon.</Text>
          </View>
          <Switch />
        </View>
        <Line />
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <Text style={styles.heading}>Dark Theme</Text>
            <Text style={styles.subText}>comming soon.</Text>
          </View>
          <Switch />
        </View>
        <Line />
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <Text style={styles.heading}>Reason(s)</Text>
            <Text style={styles.subText}>comming soon.</Text>
          </View>
          <Switch />
        </View>
        <Line />
        <View style={styles.item}>
          <Text style={styles.heading}>Privacy Policy</Text>
          <Text style={styles.subText}>
            Learn about privacy policy of this app.
          </Text>
        </View>
        <Line />
        <View style={styles.item}>
          <Text style={styles.heading}>Credits</Text>
          <Text style={styles.subText}>
            Credits for libraries and other resources used to make this app.
          </Text>
        </View>
        <Line />
        <View style={styles.item}>
          <Text style={styles.heading}>Suggestions</Text>
          <Text style={styles.subText}>Write your Feedback for this App.</Text>
        </View>
        <Line />
        <View style={styles.item}>
          <Text style={styles.heading}>App Version</Text>
          <Text style={styles.subText}>v1.0.0</Text>
        </View>
        <Line />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    marginTop: 70,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  heading: {
    ...$Typography.smallHeading,
    fontFamily: $Typography.fonts.robotoCondensedBold,
    fontSize: 17,
    color: '#666',
  },
  subText: {
    ...$Typography.headingsupportText,
    fontFamily: $Typography.fonts.robotoCondensed,
    fontSize: 15,
  },
});

export default SettingsScreen;
