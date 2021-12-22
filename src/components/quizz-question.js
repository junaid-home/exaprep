import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Line from '../components/line';

import {$Color, $Typography} from '../styles';

import DownloadIcon from '../assets/icons/download.svg';
import CorrectIcon from '../assets/icons/correct.svg';
import WrongIcon from '../assets/icons/wrong.svg';

import OptionAIcon from '../assets/icons/optionA.svg';
import OptionBIcon from '../assets/icons/optionB.svg';
import OptionCIcon from '../assets/icons/optionC.svg';
import OptionDIcon from '../assets/icons/optionD.svg';

import CorrectOptionAIcon from '../assets/icons/rightA.svg';
import CorrectOptionBIcon from '../assets/icons/rightB.svg';
import CorrectOptionCIcon from '../assets/icons/rightC.svg';
import CorrectOptionDIcon from '../assets/icons/rightD.svg';

import WrongOptionAIcon from '../assets/icons/wrongA.svg';
import WrongOptionBIcon from '../assets/icons/wrongB.svg';
import WrongOptionCIcon from '../assets/icons/wrongC.svg';
import WrongOptionDIcon from '../assets/icons/wrongD.svg';

function QuizzOptions({data, count}) {
  return (
    <View style={styles.container}>
      <View style={styles.queryContainer}>
        <Text style={styles.query}>
          {count}: {data.query}
          &nbsp; &nbsp;
        </Text>
        <TouchableOpacity style={styles.downloadIcon}>
          <DownloadIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.option}>
        <Option type="A" value={data.optionA} correct={data.answer} />
      </View>
      <View style={styles.option}>
        <Option type="B" selected value={data.optionB} correct={data.answer} />
      </View>
      <View style={styles.option}>
        <Option type="C" value={data.optionC} correct={data.answer} />
      </View>
      <View style={styles.option}>
        <Option type="D" selected value={data.optionD} correct={data.answer} />
      </View>
      <View>
        <View style={{marginVertical: 10}}>
          <Line />
        </View>
      </View>
    </View>
  );
}

const Option = ({type, value, correct, selected}) => {
  let OptionIcon;
  if (type === 'A') {
    if (selected && value == correct) OptionIcon = CorrectOptionAIcon;
    else if (selected && value != correct) OptionIcon = WrongOptionAIcon;
    else OptionIcon = OptionAIcon;
  }
  if (type === 'B') {
    if (selected && value == correct) OptionIcon = CorrectOptionBIcon;
    else if (selected && value != correct) OptionIcon = WrongOptionBIcon;
    else OptionIcon = OptionBIcon;
  }
  if (type === 'C') {
    if (selected && value == correct) OptionIcon = CorrectOptionCIcon;
    else if (selected && value != correct) OptionIcon = WrongOptionCIcon;
    else OptionIcon = OptionCIcon;
  }
  if (type === 'D') {
    if (selected && value == correct) OptionIcon = CorrectOptionDIcon;
    else if (selected && value != correct) OptionIcon = WrongOptionDIcon;
    else OptionIcon = OptionDIcon;
  }

  let containerStyles = styles.optionContainer;
  if (selected && correct == value)
    containerStyles = {
      ...styles.optionContainer,
      backgroundColor: $Color.rightAnswerBackground,
    };

  if (selected && value != correct)
    containerStyles = {
      ...styles.optionContainer,
      backgroundColor: $Color.wrongAnswerBackground,
    };

  return (
    <TouchableOpacity style={containerStyles}>
      <View style={styles.optionContent}>
        <OptionIcon style={styles.optionIcon} />
        <Text style={styles.optionText}>{value}</Text>
        {selected && correct == value && (
          <View style={styles.correctIcon}>
            <CorrectIcon />
          </View>
        )}
        {selected && value != correct && (
          <View style={styles.correctIcon}>
            <WrongIcon />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  queryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  query: {
    fontFamily: $Typography.fonts.robotoCondensed,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  downloadIcon: {paddingHorizontal: 6, marginTop: 15},
  option: {
    marginTop: 10,
  },
  optionContainer: {
    width: '100%',
    backgroundColor: $Color.foreground,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 13,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  optionText: {
    ...$Typography.headingsupportText,
    fontSize: 15,
  },
  correctIcon: {marginLeft: 'auto'},
});

export default QuizzOptions;
