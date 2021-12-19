import * as React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import FancyGreetingsText from '../components/fancy-greetings-text';
import TextInput from '../components/text-input';
import Button from '../components/button';

import LeftCircle from '../assets/orange-circle.svg';
import RightCircle from '../assets/yellow-circle.svg';

import {$Color, $Typography} from '../styles';
import useKeyboardDetection from '../hooks/use-keyboard-detection';

function RegisterScreen() {
  const isKeyboardVisible = useKeyboardDetection();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.primary} />
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView behavior="padding">
          <FancyGreetingsText text="Hello...!" />
          <View style={styles.input}>
            <TextInput
              placeholder="First Name"
              border={0}
              backgroundColor={$Color.bluishTextInput}
              color={$Color.bluishTextInputText}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Last Name"
              border={0}
              backgroundColor={$Color.bluishTextInput}
              color={$Color.bluishTextInputText}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Username"
              border={0}
              backgroundColor={$Color.bluishTextInput}
              color={$Color.bluishTextInputText}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="First Name"
              border={0}
              backgroundColor={$Color.bluishTextInput}
              color={$Color.bluishTextInputText}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Email Address"
              border={0}
              backgroundColor={$Color.bluishTextInput}
              color={$Color.bluishTextInputText}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Phone Number"
              border={0}
              phone
              backgroundColor={$Color.bluishTextInput}
              color={$Color.bluishTextInputText}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Password"
              secureTextEntry
              border={0}
              backgroundColor={$Color.bluishTextInput}
              color={$Color.bluishTextInputText}
            />
          </View>
          <View style={styles.button}>
            <Button text="Register" />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      {!isKeyboardVisible && (
        <React.Fragment>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>Already Have an Account ? </Text>
            <TouchableOpacity>
              <Text style={styles.bottomTextOrange}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leftCircle}>
            <LeftCircle />
          </View>
          <View style={styles.rightCircle}>
            <RightCircle />
          </View>
        </React.Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: $Color.primary,
  },
  scrollView: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  leftCircle: {
    position: 'absolute',
    bottom: -100,
    left: -100,
    width: '100%',
  },
  rightCircle: {
    position: 'absolute',
    bottom: -100,
    right: -100,
  },
  input: {
    marginTop: 16,
  },
  button: {
    marginTop: 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 10,
    paddingTop: 10,
  },
  bottomTextOrange: {
    color: $Color.secondary,
    fontSize: 17,
    fontFamily: $Typography.fonts.robotoCondensedBold,
  },
  bottomText: {
    color: $Color.foreground,
    fontSize: 15,
    fontFamily: $Typography.fonts.robotoCondensedBold,
  },
});

export default RegisterScreen;
