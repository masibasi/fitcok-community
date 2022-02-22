import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

import TitleImg from '../Img/mainContentstitle1Copy13.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopTab} from './TopTab';

const MainContainer = styled(ScrollView)`
  background-color: turquoise;
`;
const ContentWrapper = styled(View)`
  flex: 1;
`;
const TopNav = styled(View)`
  height: 56px;
  background-color: red;
  flex-direction: row;
  align-items: center;
`;
export const AllScreen = ({navigation}) => {
  return (
    <ContentWrapper>
      <TopTab />
      <TopNav>
        <Text>전체</Text>
        <Text>피드</Text>
        <Text>공동구매</Text>
        <Text>체험단</Text>
      </TopNav>
      <MainContainer></MainContainer>
    </ContentWrapper>
  );
};
