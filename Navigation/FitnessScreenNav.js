import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AllTabScreen} from '../Screens/AllTabScreen';
import {FeedTabScreen} from '../Screens/FeedTabScreen';
import {GroupTabScreen} from '../Screens/GroupTabScreen';
import {TestTabScreen} from '../Screens/TestTabScreen';

const Tab = createBottomTabNavigator();

export const FitnessScreenNav = ({navigation}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={() => {}}>
      <Tab.Screen name="전체" component={AllTabScreen} />
      <Tab.Screen name="피드" component={FeedTabScreen} />
      <Tab.Screen name="공동구매" component={GroupTabScreen} />
      <Tab.Screen name="체험단" component={TestTabScreen} />
    </Tab.Navigator>
  );
};
