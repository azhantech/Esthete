/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/Utils/navigation';
import MainNavigator from './src/Navigation/MainNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <NavigationContainer ref={navigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
