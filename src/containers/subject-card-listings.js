import * as React from 'react';

import {FlatList, StyleSheet} from 'react-native';
import SubjectCard from '../components/subject-card';

const data = [
  {
    id: 1,
    name: 'Past Paper',
    code: '#FF8B8B',
    thumbnail: '',
  },
  {
    id: 2,
    name: 'Sample Paper',
    code: '#81E1DD',
    thumbnail: '',
  },
  {
    id: 3,
    name: 'Quizz',
    code: '#868FDC',
    thumbnail: '',
  },
  {
    id: 4,
    name: 'Sylabous',
    code: '#42F891',
    thumbnail: '',
  },
];

function SubjectCardListings() {
  return (
    <FlatList
      style={styles.container}
      key={'_'}
      data={data}
      numColumns={2}
      contentContainerStyle={styles.flatContainer}
      keyExtractor={(item, index) => `${index}-item-${item.id}`}
      renderItem={({item}) => <SubjectCard data={item} />}
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

export default SubjectCardListings;
