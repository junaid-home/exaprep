import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ShareIcon from '../assets/icons/share.svg';

import {$Color, $Typography} from '../styles';

function ResultCard({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainerLeft}>
        <Text style={styles.leftMarksText}>
          {data.obtained} / {data.total}
        </Text>
        <Text style={styles.leftPercentText}>
          {((data.obtained * data.total) / 100).toFixed(2) + ' %'}
        </Text>
      </View>
      <View style={styles.subContainerRight}>
        <TouchableOpacity style={styles.share}>
          <ShareIcon />
        </TouchableOpacity>
        <Text style={styles.rightExam}>Exam</Text>
        <Text style={styles.rightNameText}>{data.exam}</Text>
        <Text style={styles.rightTypeText}>({data.exam_type})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  subContainerLeft: {
    backgroundColor: $Color.secondary,
    padding: 15,
    height: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingTop: '13%',
    elevation: 3,
  },
  leftMarksText: {
    ...$Typography.smallHeading,
    paddingVertical: 7,
    fontSize: 22,
    color: $Color.foreground,
  },
  leftPercentText: {
    ...$Typography.headingsupportText,
    fontSize: 14,
    color: $Color.foreground,
  },
  subContainerRight: {
    backgroundColor: $Color.foreground,
    flex: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    elevation: 3,
  },
  rightExam: {
    ...$Typography.headingsupportText,
    fontSize: 14,
  },
  rightNameText: {
    ...$Typography.smallHeading,
    fontFamily: $Typography.fonts.robotoCondensed,
    fontSize: 21,
    marginVertical: 7,
  },
  rightTypeText: {
    ...$Typography.headingsupportText,
  },
  share: {
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
});

export default ResultCard;
