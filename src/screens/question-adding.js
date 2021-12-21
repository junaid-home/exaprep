import * as React from 'react';
const {View, ScrollView, StatusBar, StyleSheet} = require('react-native');
import SelectDropdown from 'react-native-select-dropdown';

import Header from '../components/header';
import Footer from '../components/footer';
import TextInput from '../components/text-input';
import Button from '../components/button';

import {$Color, $Typography} from '../styles';

function QuestionAddingScreen() {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <ScrollView contentContainerStyle={styles.statusbar}>
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
          <TextInput placeholder="Options A" />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Options B" />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Options C" />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Options D" />
        </View>
        <View style={styles.input}>
          <SelectDropdown
            defaultButtonText="Select Answer"
            buttonStyle={styles.select}
            buttonTextStyle={styles.selectText}
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
        </View>
        <View style={styles.input}>
          <Button text="Add Question" type="flat" />
        </View>
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
    paddingHorizontal: 16,
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

export default QuestionAddingScreen;
