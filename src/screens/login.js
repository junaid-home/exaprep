import * as React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Button from '../components/button';
import TextInput from '../components/text-input';
import FancyGreetingsText from '../components/fancy-greetings-text';

import Design from '../assets/login-screen-design.svg';

import {$Color, $Typography} from '../styles';

const screenHeight = Dimensions.get('screen').height;

function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.designOverlay}>
        <Design height={screenHeight / 2.3} />
      </View>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView behavior="padding">
          <FancyGreetingsText text="Welcome Back...!" />
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
              placeholder="Password"
              secureTextEntry
              border={0}
              backgroundColor={$Color.bluishTextInput}
              color={$Color.bluishTextInputText}
            />
          </View>
          <Text style={styles.forgetPassText}>Forget Password?</Text>
          <View style={styles.button}>
            <Button text="Login" />
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>Already Have an Account ? </Text>
            <TouchableOpacity>
              <Text style={styles.bottomTextOrange}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  designOverlay: {
    position: 'absolute',
    top: -90,
    right: -65,
  },
  container: {
    backgroundColor: $Color.primary,
    minHeight: screenHeight,
  },
  scrollView: {
    marginTop: screenHeight / 3,
    paddingHorizontal: 15,
  },
  input: {
    marginTop: 16,
  },
  forgetPassText: {
    alignSelf: 'flex-end',
    fontSize: 20,
    marginTop: 7.5,
    fontFamily: $Typography.fonts.robotoCondensed,
    color: $Color.bluishTextInputText,
  },
  button: {
    marginTop: 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: screenHeight / 5,
  },
  bottomTextOrange: {
    color: $Color.secondary,
    fontSize: 17,
    fontFamily: $Typography.fonts.robotoCondensedBold,
  },
  bottomText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: $Typography.fonts.robotoCondensedBold,
  },
});

export default LoginScreen;
