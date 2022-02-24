import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import TitleImg from '../Img/mainContentstitle1Copy13.png';
import Icon from 'react-native-vector-icons/Ionicons';

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
const PageTitle = styled(Image)``;

const IconWrapper = styled(View)`
  flex-direction: row;
  padding-bottom: 8px;
`;
const SearchButton = styled(TouchableOpacity)``;
const SearchIcon = styled(Icon)`
  margin-right: 8px;
`;
const NotificationButton = styled(TouchableOpacity)``;
const NotificationIcon = styled(Icon)``;
export const TopTab = () => {
  return (
    <TopContainer>
      <TitleWrapper>
        <PageTitle source={TitleImg} />
      </TitleWrapper>
      <IconWrapper>
        <SearchButton>
          <SearchIcon name="md-search-outline" size={24} color="rgb(0,0,0)" />
        </SearchButton>
        <NotificationButton>
          <NotificationIcon
            name="notifications-outline"
            size={24}
            color="rgb(0,0,0)"
          />
        </NotificationButton>
      </IconWrapper>
    </TopContainer>
  );
};
