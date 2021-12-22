import * as React from 'react';

import {FlatList, StyleSheet} from 'react-native';

import QuizzQuestion from '../components/quizz-question';

const data = [
  {
    id: 1,
    query:
      'Organization of Islamic Cooperation (OIC) has __________ official languages.',
    optionA: 'Three',
    optionB: 'Five',
    optionC: 'Nine',
    optionD: 'Eight',
    answer: 'Five',
  },
  {
    id: 2,
    query:
      'Organization of Islamic Cooperation (OIC) has __________ official languages.',
    optionA: 'Three',
    optionB: 'Five',
    optionC: 'Nine',
    optionD: 'Eight',
    answer: 'Five',
  },
  {
    id: 3,
    query:
      'Organization of Islamic Cooperation (OIC) has __________ official languages.',
    optionA: 'Three',
    optionB: 'Five',
    optionC: 'Nine',
    optionD: 'Eight',
    answer: 'Five',
  },
  {
    id: 4,
    query:
      'Organization of Islamic Cooperation (OIC) has __________ official languages.',
    optionA: 'Three',
    optionB: 'Five',
    optionC: 'Nine',
    optionD: 'Eight',
    answer: 'Five',
  },
  {
    id: 5,
    query:
      'Organization of Islamic Cooperation (OIC) has __________ official languages.',
    optionA: 'Three',
    optionB: 'Five',
    optionC: 'Nine',
    optionD: 'Eight',
    answer: 'Five',
  },
];

function QuizzQuestionListings() {
  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.flatContainer}
      keyExtractor={(item, index) => `${index}-item-${item.id}`}
      renderItem={({item, index}) => (
        <QuizzQuestion data={item} count={index + 1} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatContainer: {
    paddingBottom: 35,
    paddingHorizontal: 8,
  },
});

export default QuizzQuestionListings;
