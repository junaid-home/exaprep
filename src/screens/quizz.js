import * as React from 'react';
const {View, StatusBar, StyleSheet} = require('react-native');

import Header from '../components/header';
import Footer from '../components/footer';

import QuizzQuestionListings from '../containers/quizz-question-listings';
import {$Color} from '../styles';

function QuizzScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <View style={styles.subContainer}>
        <QuizzQuestionListings />
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
    marginTop: 70,
  },
});

export default QuizzScreen;
