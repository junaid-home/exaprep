import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';

import Footer from '../components/footer';
import Header from '../components/header';
import CourseCardListings from '../containers/course-card-listings';

import {$Color} from '../styles';
import {
  HOME_SCREEN,
  PROFILE_SCREEN,
  RESULTS_SCREEN,
  SETTINGS_SCREEN,
} from '../helpers/constants';

function HomeScreen({navigation: {navigate: route, openDrawer}}) {
  const isDrawerOpen = useDrawerStatus() === 'open';

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={isDrawerOpen ? $Color.primary : $Color.foreground}
        barStyle={isDrawerOpen ? 'light-content' : 'dark-content'}
      />
      <Header
        onGearClicked={() => route(SETTINGS_SCREEN)}
        onMenuClicked={() => openDrawer()}
      />
      <View style={styles.cardListings}>
        <CourseCardListings />
      </View>
      <Footer
        onHomeClicked={() => route(HOME_SCREEN)}
        onProfileClicked={() => route(PROFILE_SCREEN)}
        onResultsClicked={() => route(RESULTS_SCREEN)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: $Color.background,
    flex: 1,
  },
  cardListings: {
    flex: 1,
  },
});

export default HomeScreen;
