import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import BackIcon from '../Icon/icChevronLeftBk24.svg';
import NotificationIcon from '../Icon/icBellBk24.svg';
import DotMenu from '../Icon/icDotmenuBk24.svg';

const TopContainer = styled(View)`
  background-color: white;
  height: 56px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 23px;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 8px;
`;

const BackIconWrapper = styled(TouchableOpacity)``;

const RightContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 56px;
`;

const NotificationIconWrapper = styled(TouchableOpacity)``;
const DotMenuWrapper = styled(TouchableOpacity)``;

export const TopTab = ({navigation}) => {
  return (
    <TopContainer>
      <BackIconWrapper
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon />
      </BackIconWrapper>
      <RightContainer>
        <NotificationIconWrapper>
          <NotificationIcon />
        </NotificationIconWrapper>
        <DotMenuWrapper>
          <DotMenu />
        </DotMenuWrapper>
      </RightContainer>
    </TopContainer>
  );
};
