import React from 'react';
import {View, Text, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNav} from './BottomTabNav';
import {PostDetailScreen} from '../Screens/PostDetailScreen';
import {WritePostScreen} from '../Screens/WritePostScreen';
import {CategorySettingsScreen} from '../Screens/CategorySettingsScreen';
import {NotificationsScreen} from '../Screens/NotificationsScreen';

import {ToastProvider} from 'react-native-toast-notifications';
import {PostContextProvider} from '../Services/Posts/posts.context';
import {CategoryContextProvider} from '../Services/Categories/categories.context';

const Stack = createStackNavigator();

export const FirstNav = () => {
  return (
    <PostContextProvider>
      <CategoryContextProvider>
        <Stack.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}>
          <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
          <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
          <Stack.Screen name="WritePostScreen" component={WritePostScreen} />
          <Stack.Screen
            name="CategorySettingsScreen"
            component={CategorySettingsScreen}
          />
          <Stack.Screen
            name="NotificationsScreen"
            component={NotificationsScreen}
          />
        </Stack.Navigator>
      </CategoryContextProvider>
    </PostContextProvider>
  );
};
