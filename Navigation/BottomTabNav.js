import React from 'react';
import {View, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={FitnessScreen} />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
const FitnessScreen = () => {
  return (
    <View>
      <Text>Fitness</Text>
    </View>
  );
};
