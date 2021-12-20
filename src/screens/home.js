import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import Footer from '../components/footer';
import Header from '../components/header';
import CourseCardListings from '../containers/course-card-listings';

import {$Color} from '../styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <View style={styles.cardListings}>
        <CourseCardListings />
      </View>
      <Footer />
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
