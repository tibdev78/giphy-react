import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import GifScreen from './screens/Gif';
import GifDetails from './screens/Gif/gif-details';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gif" component={GifScreen} />
        <Stack.Screen name="GifDetails" component={GifDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const screenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};
