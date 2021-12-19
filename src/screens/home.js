import * as React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';
import TextInput from '../components/text-input';
import {$Color, $Typography} from '../styles';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.greetings}>Hello {`Junaid`}! 👋</Text>
        <Text style={styles.supportingText}>
          Query the required MCQs by search term.
        </Text>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search..." border={2} borderColor="#ddd" />
        </View>
        <Text style={styles.greetings}>Popular Exams</Text>
        <Text style={styles.supportingText}>
          Prepair from the most up-to-date content.
        </Text>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: $Color.background,
    flex: 1,
  },
  scrollView: {
    paddingTop: 75,
    paddingHorizontal: 16,
  },
  greetings: {
    ...$Typography.mainHeading,
  },
  supportingText: {
    ...$Typography.headingsupportText,
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
});

export default HomeScreen;
