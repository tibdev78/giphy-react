import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import GifScreen from './screens/Gif';
import GifDetails from './screens/Gif/gif-details';
import Favorites from './screens/Favorites';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Gif" component={GifScreen} />
      <HomeStack.Screen name="GifDetails" component={GifDetails} />
    </HomeStack.Navigator>
  );
}

const getIconName = routeName => {
  switch (routeName) {
    case 'Home':
      return 'search';
    case 'Favorites':
      return 'heart';
  }
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = getIconName(route.name);
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
