/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, Pressable, StatusBar, Text, View} from 'react-native';

import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GamePlayScreen from './screens/GamePlayScreen';
import {UserContextProvider} from './store/UserContext';
import GameOverScreen from './screens/GameOverScreen';
import LeaderBoardscreen from './screens/LeaderBoardscreen';
import UserUpdateScreen from './screens/UserUpdateScreen';
import Customheader from './components/Customheader';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <UserContextProvider>
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
            <Stack.Group
              screenOptions={{
                header: ({navigation, route, options, back}: any) => (
                  <Customheader route={route} navigation={navigation} />
                ),
              }}>
              <Stack.Screen name="gamescreen" component={GameScreen} />
              <Stack.Screen name="gameoverscreen" component={GameOverScreen} />
              <Stack.Screen
                name="leaderboardscreen"
                component={LeaderBoardscreen}
              />
            </Stack.Group>
            <Stack.Screen name="gameplayscreen" component={GamePlayScreen} />

            <Stack.Screen
              name="userupdatescreen"
              component={UserUpdateScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </>
  );
}

export default App;
