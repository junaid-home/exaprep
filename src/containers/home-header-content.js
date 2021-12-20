import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import TextInput from '../components/text-input';

import {$Color, $Typography} from '../styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greetings}>Hello {`Junaid`}! 👋</Text>
      <Text style={styles.supportingText}>
        Query the required MCQs by search term.
      </Text>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search..." border={1} borderColor="#CCC" />
      </View>
      <Text style={styles.greetings}>Popular Exams</Text>
      <Text style={styles.supportingText}>
        Prepair from the most up-to-date content.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $Color.background,
    paddingTop: 75,
    paddingHorizontal: 8,
  },
  greetings: {
    ...$Typography.mainHeading,
  },
  supportingText: {
    ...$Typography.headingsupportText,
    marginBottom: 15,
  },
  searchContainer: {
    marginBottom: 30,
  },
});

export default HomeScreen;
