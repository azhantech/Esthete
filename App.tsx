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
import {store} from './src/Redux/store';
import BootSplash from "react-native-bootsplash";

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
        </Provider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
