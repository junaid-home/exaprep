import * as React from 'react';
const {
  View,
  Text,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} = require('react-native');

import Header from '../components/header';
import Footer from '../components/footer';
import Button from '../components/button';
import TextArea from '../components/text-area';

import {$Color, $Typography} from '../styles';

function FeedbackScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <ScrollView style={styles.subContainer}>
        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.secondaryText}>
            Have any suggestion/feedback? You can contact us by writing below.{' '}
          </Text>
          <Text style={styles.heading}>Feedback</Text>
          <TextArea placeholder="Please write your valuable feedback here." />
          <View style={styles.button}>
            <Button type="flat" text="Submit Feedback" />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
    paddingHorizontal: 16,
  },
  secondaryText: {
    ...$Typography.headingsupportText,
  },
  heading: {
    ...$Typography.mainHeading,
    fontSize: 30,
    marginVertical: 10,
    marginBottom: 20,
    color: '#707070',
  },
  button: {
    marginVertical: 20,
    paddingBottom: 30,
  },
});

export default FeedbackScreen;
