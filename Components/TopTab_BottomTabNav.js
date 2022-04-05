import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import MenuIcon from '../Icon/icMenuBk24.svg';
import NotificationIcon from '../Icon/icBellBk24.svg';

const TopContainer = styled(View)`
  background-color: white;
  height: 56px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 23px;
  justify-content: space-between;
  flex-direction: row;
`;
const TitleWrapper = styled(View)`
  padding-bottom: 7px;
`;
const PageTitle = styled(Text)`
  margin-right: 24px;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const IconWrapper = styled(View)`
  flex-direction: row;
  padding-bottom: 8px;
`;
const MenuIconWrapper = styled(TouchableOpacity)``;

const NotificationButton = styled(TouchableOpacity)`
  margin-left: 8px;
`;

export const TopTab = () => {
  return (
    <TopContainer>
      <TitleWrapper>
        <PageTitle>커뮤니티</PageTitle>
      </TitleWrapper>
      <IconWrapper>
        <MenuIconWrapper>
          <MenuIcon />
        </MenuIconWrapper>
        <NotificationButton>
          <NotificationIcon />
        </NotificationButton>
      </IconWrapper>
    </TopContainer>
  );
};
