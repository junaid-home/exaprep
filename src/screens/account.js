import * as React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

import Header from '../components/header';
import Footer from '../components/footer';
import TextInput from '../components/text-input';
import Button from '../components/button';

import {$Color, $Typography} from '../styles';

function AccountScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={$Color.foreground} barStyle="dark-content" />
      <Header />
      <ScrollView>
        <KeyboardAvoidingView style={styles.scrollView} behavior="padding">
          <View style={styles.imgPrimaryContainer}>
            <View style={styles.imgSecondaryContainer}>
              <Image
                style={styles.img}
                source={require('../assets/images/avatar.png')}
              />
            </View>
          </View>
          <View style={styles.usernameContaier}>
            <Text style={styles.name}>John Ibrahim</Text>
            <Text style={styles.secondaryText}>@joni_ibh</Text>
          </View>
          <Line />
          <View style={styles.infoContainer}>
            <View style={styles.infoSubContainer}>
              <Text style={styles.infoHeading}>Ph#</Text>
              <Text style={styles.secondaryText}>+923320511497</Text>
            </View>
            <View style={styles.infoSubContainer}>
              <Text style={styles.infoHeading}>Email</Text>
              <Text style={styles.secondaryText}>joni.ibh@gmail.com</Text>
            </View>
          </View>
          <Line />
          <View style={styles.form}>
            <View style={styles.input}>
              <TextInput placeholder="Current Password" />
            </View>
            <View style={styles.input}>
              <TextInput placeholder="New Password" />
            </View>
            <View style={styles.input}>
              <TextInput placeholder="Confirm New Password" />
            </View>
            <View style={styles.input}>
              <Button text="Change Password" type="flat" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Footer />
    </View>
  );
}
const Line = () => (
  <View style={styles.line}>
    <Text>&nbsp;</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: $Color.background,
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingTop: 80,
    alignItems: 'center',
  },
  img: {
    width: 110,
    height: 110,
    backgroundColor: '#FFFF',
    borderRadius: 200,
  },
  imgPrimaryContainer: {
    backgroundColor: $Color.secondary,
    width: 130,
    height: 130,
    justifyContent: 'center',
    borderRadius: 200,
    alignItems: 'center',
    elevation: 5,
  },
  imgSecondaryContainer: {
    backgroundColor: $Color.primary,
    width: 120,
    height: 120,
    justifyContent: 'center',
    borderRadius: 200,
    alignItems: 'center',
  },
  name: {
    ...$Typography.mainHeading,
    marginTop: 10,
  },
  usernameContaier: {
    marginBottom: 20,
    alignItems: 'center',
  },
  secondaryText: {
    ...$Typography.headingsupportText,
  },
  line: {height: 1, backgroundColor: '#ddd', width: '100%', borderRadius: 10},
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  infoSubContainer: {
    alignItems: 'center',
  },
  infoHeading: {
    ...$Typography.smallHeading,
  },
  form: {
    marginTop: 20,
  },
  input: {
    marginTop: 15,
  },
});

export default AccountScreen;
