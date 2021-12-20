import * as React from 'react';
import {StyleSheet, StatusBar, Text, View} from 'react-native';

import Header from '../components/header';
import Footer from '../components/footer';
import SubjectCardListings from '../containers/subject-card-listings';

import {$Color, $Typography} from '../styles';

function SubjectsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <View style={styles.listinsContainer}>
        <View style={styles.topHeadingContainer}>
          <Text style={styles.heading}>
            {`Medical and Dental College Admission Test`}
            <Text style={styles.headingSecondary}>{` (MDCAT)`} </Text>
          </Text>
        </View>
        <SubjectCardListings />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: $Color.background,
    paddingTop: 70,
    flex: 1,
  },
  topHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  listinsContainer: {
    flex: 1,
  },
  heading: {
    ...$Typography.mainHeading,
    letterSpacing: 2,
  },
  headingSecondary: {
    ...$Typography.mainHeading,
    color: $Color.secondary,
  },
});

export default SubjectsScreen;
