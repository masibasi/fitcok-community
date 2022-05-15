import React from 'react';
import {View, Text, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNav} from './BottomTabNav';
import {PostDetailScreen} from '../Screens/PostDetailScreen';
import {WritePostScreen} from '../Screens/WritePostScreen';

const Stack = createStackNavigator();

export const FirstNav = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, focused}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
      <Stack.Screen name="WritePostScreen" component={WritePostScreen} />
    </Stack.Navigator>
  );
};