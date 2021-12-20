import * as React from 'react';

import {FlatList, StyleSheet} from 'react-native';

import CourseCard from '../components/course-card';
import HomeHeaderContent from './home-header-content';

const data = [
  {
    id: 1,
    name: 'National Testing Service',
    type: 'competative',
  },
  {
    id: 2,
    name: 'Pakistan Medical Commision',
    type: 'MDCAT',
  },
  {
    id: 3,
    name: 'Inter Services Selection Board',
    type: 'Army Testing',
  },
  {
    id: 4,
    name: 'Central Superior Services',
    type: 'competative',
  },
  {
    id: 5,
    name: 'National Testing Service',
    type: 'ECAT',
  },
];

function CourseCardListings() {
  return (
    <FlatList
      style={styles.container}
      key={'_'}
      data={data}
      numColumns={2}
      contentContainerStyle={styles.flatContainer}
      ListHeaderComponent={HomeHeaderContent}
      keyExtractor={(item, index) => `${index}-item-${item.id}`}
      renderItem={({item}) => <CourseCard data={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  flatContainer: {
    paddingBottom: 35,
  },
});

export default CourseCardListings;
