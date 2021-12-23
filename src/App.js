import * as React from 'react';
import * as $Constants from './helpers/constants';

import SplashScreen from 'react-native-splash-screen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/home';
import ResultsScreen from './screens/results';
import ProfileScreen from './screens/account';
import SettingsScreen from './screens/settings';
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import SubjectsScreen from './screens/subjects';
import QuizzScreen from './screens/quizz';

import SideDrawer from './containers/side-drawer';

function App() {
  const Drawer = createDrawerNavigator();

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={SideDrawer}
        screenOptions={{headerShown: false}}
        initialRouteName={$Constants.HOME_SCREEN}>
        <Drawer.Screen name={$Constants.HOME_SCREEN} component={HomeScreen} />
        <Drawer.Screen
          name={$Constants.RESULTS_SCREEN}
          component={ResultsScreen}
        />
        <Drawer.Screen
          name={$Constants.PROFILE_SCREEN}
          component={ProfileScreen}
        />
        <Drawer.Screen
          name={$Constants.SETTINGS_SCREEN}
          component={SettingsScreen}
        />
        <Drawer.Screen name={$Constants.LOGIN_SCREEN} component={LoginScreen} />
        <Drawer.Screen
          name={$Constants.REGISER_SCREEN}
          component={RegisterScreen}
        />
        <Drawer.Screen
          name={$Constants.SUBJECTS_SCREEN}
          component={SubjectsScreen}
        />
        <Drawer.Screen name={$Constants.QUIZZ_SCREEN} component={QuizzScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
