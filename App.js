/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/Home';
import LogsScreen from './screens/Logs';
import WifiScreen from './screens/Wifi';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const App = () => {
  React.useEffect(() => {
    getFcmToken();
  }, []);
  const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: true,
            headerStyle: {backgroundColor: '#00BECA'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
          }}
          drawerContentOptions={{
            activeBackgroundColor: '#fff',
            activeTintColor: '#00BECA',
            labelStyle: {
              fontWeight: 'bold',
              fontSize: 17,
            },
            inactiveTintColor: '#fff',
          }}
          labelStyle={{fontWeight: 'bold', color: '#fff'}}
          drawerStyle={{
            backgroundColor: 'rgba(0, 190,202, 0.9)',
            width: 240,
            paddingTop: '10%',
          }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="History" component={LogsScreen} />
          <Drawer.Screen name="Wifi  Connect" component={WifiScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
