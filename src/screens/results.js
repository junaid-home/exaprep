import * as React from 'react';
const {View, StatusBar, StyleSheet} = require('react-native');

import Header from '../components/header';
import Footer from '../components/footer';

import ResultCardListings from '../containers/result-card-listings';
import {$Color} from '../styles';

function ResultsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <View style={styles.subContainer}>
        <ResultCardListings />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    marginTop: 10,
  },
});

export default ResultsScreen;
