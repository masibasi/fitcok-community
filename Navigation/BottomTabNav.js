import React from 'react';
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommunityScreenNav} from './CommunityScreenNav';

import HomeActiveIcon from '../Icon/naviHomeActive.svg';
import HomeDisabledIcon from '../Icon/naviHomeDisabled.svg';
import CommunityActiveIcon from '../Icon/naviCommunityActive.svg';
import CommunityDisabledIcon from '../Icon/naviCommunityDisabled.svg';
import FitnessActiveIcon from '../Icon/naviFitnessActive.svg';
import FitnessDisabledIcon from '../Icon/naviFitnessDisabled.svg';
import StoreActiveIcon from '../Icon/naviStoreActive.svg';
import StoreDisabledIcon from '../Icon/naviStoreDisabled.svg';
import MypageActiveIcon from '../Icon/naviMypageActive.svg';
import MypageDisabledIcon from '../Icon/naviMypageDisabled.svg';

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="커뮤니티"
      screenOptions={({route, focused}) => ({
        headerShown: false,
        tabBarInactiveTintColor: 'rgb(116,117,118)',
        tabBarActiveTintColor: 'rgb(24,25,26)',
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        tabBarLabel: ({focused}) => TabBarLabel(focused, route.name),
        tabBarStyle: {paddingTop: 4},
      })}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="피트니스" component={FitnessScreen} />
      <Tab.Screen name="커뮤니티" component={CommunityScreenNav} />
      <Tab.Screen name="커머스" component={CommerceScreen} />
      <Tab.Screen name="마이" component={MyScreen} />
    </Tab.Navigator>
  );
};
const TabBarLabel = (focused, name) => {
  if (focused) {
    return (
      <Text style={{fontSize: 9, fontWeight: '500', color: 'rgb(24,25,26)'}}>
        {name}
      </Text>
    );
  } else
    return (
      <Text style={{fontSize: 9, fontWeight: '400', color: 'rgb(116,117,118)'}}>
        {name}
      </Text>
    );
};
const TabBarIcon = (focused, name) => {
  if (name === '홈') {
    return focused ? <HomeActiveIcon /> : <HomeDisabledIcon />;
  } else if (name === '피트니스') {
    return focused ? <FitnessActiveIcon /> : <FitnessDisabledIcon />;
  } else if (name === '커뮤니티') {
    return focused ? <CommunityActiveIcon /> : <CommunityDisabledIcon />;
  } else if (name === '커머스') {
    return focused ? <StoreActiveIcon /> : <StoreDisabledIcon />;
  } else if (name === '마이') {
    return focused ? <MypageActiveIcon /> : <MypageDisabledIcon />;
  }
};
const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
const CommerceScreen = () => {
  return (
    <View>
      <Text>Commerce</Text>
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
const MyScreen = () => {
  return (
    <View>
      <Text>My</Text>
    </View>
  );
};
