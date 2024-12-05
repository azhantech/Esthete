/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/Utils/navigation';
import MainNavigator from './src/Navigation/MainNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import BootSplash from "react-native-bootsplash";
import Toast from 'react-native-toast-message';
import { store } from './src/Redux/store';

function App(): React.JSX.Element {
  useEffect(() =>{
    BootSplash.hide()
  },[])
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <MainNavigator />
          </NavigationContainer>
          <Toast />
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
