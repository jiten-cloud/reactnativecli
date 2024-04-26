/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GamePlayScreen from './screens/GamePlayScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="startscreen"
            component={StartGameScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="gamescreen" component={GameScreen} />
          <Stack.Screen name="gameplayscreen" component={GamePlayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
