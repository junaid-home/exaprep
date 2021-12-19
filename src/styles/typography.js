import {StyleSheet} from 'react-native';

const fonts = {
  robotoCondensed: 'RobotoCondensed-Regular',
  robotoCondensedBold: 'RobotoCondensed-Bold',
  robotoCondensedBoldItalic: 'RobotoCondensed-BoldItalic',
  meowScript: 'MeowScript-Regular',
};

export default StyleSheet.create({
  fonts,
  logoTextBase: {
    fontSize: 30,
    fontFamily: fonts.robotoCondensedBoldItalic,
    letterSpacing: 4,
  },
  mainHeading: {
    fontSize: 25,
    letterSpacing: 1,
    fontFamily: fonts.robotoCondensedBold,
    color: '#333',
  },
  headingsupportText: {
    color: '#707070',
    letterSpacing: 0.5,
    fontSize: 18,
  },
});
