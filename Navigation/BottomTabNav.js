import React from 'react';
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommunityScreenNav} from './CommunityScreenNav';

const HomeDisabled = require('../Img/naviIcHomeGrayText.png');
const HomeActive = require('../Img/naviHomeActive.png');
const FitnessActive = require('../Img/naviIcFitnessBkSelectText.png');
const FitnessDisabled = require('../Img/naviFitnessDisabled.png');
const CommunityActive = require('../Img/naviCommunityActive.png');
const CommunityDisabled = require('../Img/naviCommunityDisabled.png');
const CommerceActive = require('../Img/naviStoreActive.png');
const CommerceDisabled = require('../Img/naviStoreDisabled.png');
const MypageActive = require('../Img/naviMypageActive.png');
const MypageDisabled = require('../Img/naviMypageDisabled.png');
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
      <Text
        style={{fontSize: 9, fontWeight: 'Normal', color: 'rgb(116,117,118)'}}>
        {name}
      </Text>
    );
};
const TabBarIcon = (focused, name) => {
  if (name === '홈') {
    return focused ? (
      <Image source={HomeActive} />
    ) : (
      <Image source={HomeDisabled} />
    );
  } else if (name === '피트니스') {
    return focused ? (
      <Image source={FitnessActive} />
    ) : (
      <Image source={FitnessDisabled} />
    );
  } else if (name === '커뮤니티') {
    return focused ? (
      <Image source={CommunityActive} />
    ) : (
      <Image source={CommunityDisabled} />
    );
  } else if (name === '커머스') {
    return focused ? (
      <Image source={CommerceActive} />
    ) : (
      <Image source={CommerceDisabled} />
    );
  } else if (name === '마이') {
    return focused ? (
      <Image source={MypageActive} />
    ) : (
      <Image source={MypageDisabled} />
    );
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
