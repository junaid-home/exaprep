import * as React from 'react';

import {FlatList, StyleSheet} from 'react-native';

import ResultCard from '../components/result-card';

const data = [
  {
    id: 1,
    obtained: 98,
    total: 100,
    exam: 'National Testing Service',
    exam_type: 'ECAT',
  },
  {
    id: 2,
    obtained: 98,
    total: 100,
    exam: 'National Testing Service',
    exam_type: 'ECAT',
  },
  {
    id: 3,
    obtained: 98,
    total: 100,
    exam: 'National Testing Service',
    exam_type: 'ECAT',
  },
  {
    id: 4,
    obtained: 98,
    total: 100,
    exam: 'National Testing Service',
    exam_type: 'ECAT',
  },
  {
    id: 5,
    obtained: 98,
    total: 100,
    exam: 'National Testing Service',
    exam_type: 'ECAT',
  },
];

function CourseCardListings() {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.flatContainer}
      keyExtractor={(item, index) => `${index}-item-${item.id}`}
      renderItem={({item}) => <ResultCard data={item} />}
    />
  );
}

const styles = StyleSheet.create({
  flatContainer: {
    paddingBottom: 35,
    paddingHorizontal: 16,
  },
});

export default CourseCardListings;
