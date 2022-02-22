import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTab} from '../Screens/TopTab';
import {AllScreen} from '../Screens/AllScreen';

const Tab = createMaterialTopTabNavigator();

export const FitnessScreenNav = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={() => {}}>
      <Tab.Screen name="전체" component={AllScreen} />
      <Tab.Screen name="피드" component={FeedScreen} />
      <Tab.Screen name="공동구매" component={GroupBuyingScreen} />
      <Tab.Screen name="체럼단" component={TesterScreen} />
    </Tab.Navigator>
  );
};

// const AllScreen = () => {
//   return <TopTab />;
// };
const FeedScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
};
const GroupBuyingScreen = () => {
  return (
    <View>
      <Text>GroupBuyingScreen</Text>
    </View>
  );
};
const TesterScreen = () => {
  return (
    <View>
      <Text>TesterScreen</Text>
    </View>
  );
};
