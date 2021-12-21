import * as React from 'react';
const {
  View,
  Text,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} = require('react-native');
import SelectDropdown from 'react-native-select-dropdown';

import Header from '../components/header';
import Footer from '../components/footer';
import Button from '../components/button';
import TextInput from '../components/text-input';
import TextArea from '../components/text-area';

import {$Color, $Typography} from '../styles';

function AnswerCorrectionScreen() {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <ScrollView style={styles.subContainer}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.input}>
            <SelectDropdown
              defaultButtonText="Select an Exam"
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
            />
          </View>
          <View style={styles.input}>
            <SelectDropdown
              defaultButtonText="Select a Subject"
              buttonStyle={styles.select}
              buttonTextStyle={styles.selectText}
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
            />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Type Question" />
          </View>
          <View style={styles.input}>
            <TextInput placeholder="Write Correct Answer" />
          </View>
          <Text style={styles.heading}>Reason</Text>
          <TextArea placeholder="Reason of answer being wrong." />
          <View style={styles.button}>
            <Button type="flat" text="Submit Correction Request" />
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
    ...$Typography.smallHeading,
    fontSize: 20,
    marginVertical: 10,
    marginBottom: 20,
    color: '#707070',
  },
  button: {
    marginVertical: 20,
    paddingBottom: 30,
  },
  select: {
    width: '100%',
    backgroundColor: $Color.foreground,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 100,
  },
  selectText: {
    color: '#707070',
    fontSize: 18,
    fontFamily: $Typography.fonts.robotoCondensed,
    textAlign: 'left',
  },
  input: {
    marginTop: 15,
  },
});

export default AnswerCorrectionScreen;
