import React from 'react';
import {View, Text, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FitnessScreenNav} from './FitnessScreenNav';

const HomeIcon = require('../Img/naviIcHomeGrayText.png');
const FitnessIcon = require('../Img/naviIcFitnessBkSelectText.png');
const CommerceIcon = require('../Img/naviIcStore2GrayText.png');
const MyIcon = require('../Img/naviIcMypageGrayText.png');
const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="피트니스"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarInactiveTintColor: 'rgb(116,117,118)',
        tabBarActiveTintColor: 'rgb(24,25,26)',
        tabBarIcon: ({focused}) => {
          if (route.name === '홈') {
            return <Image source={HomeIcon} />;
          } else if (route.name === '피트니스') {
            return <Image source={FitnessIcon} />;
          } else if (route.name === '커머스') {
            return <Image source={CommerceIcon} />;
          } else if (route.name === '마이') {
            return <Image source={MyIcon} />;
          }
        },
      })}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="피트니스" component={FitnessScreenNav} />
      <Tab.Screen name="커머스" component={CommerceScreen} />
      <Tab.Screen name="마이" component={MyScreen} />
    </Tab.Navigator>
  );
};

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconName, iconSize;

  if (route.name === '홈') {
    return <Image source={HomeIcon} />;
  } else if (route.name === '피트니스') {
    return <Image source={FitnessIcon} />;
  } else if (route.name === '커머스') {
    return <Image source={CommerceIcon} />;
  } else if (route.name === '마이') {
    return <Image source={MyIcon} />;
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
const MyScreen = () => {
  return (
    <View>
      <Text>My</Text>
    </View>
  );
};
