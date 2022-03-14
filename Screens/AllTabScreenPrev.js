import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';
import {TopTab} from './TopTab';
import {TopNav} from '../Navigation/TopNav';
import {TodayHotItem} from '../Components/TodayHotItem';
import {RecruitTester} from '../Components/RecruitTester';
import {PopularFeed} from '../Components/PopularFeed';

const MainContainer = styled(ScrollView)`
  background-color: turquoise;
`;
const ContentWrapper = styled(View)`
  flex: 1;
`;
export const AllTabScreen = ({navigation}) => {
  return (
    <ContentWrapper>
      <TopTab />
      <TopNav title="all" navigation={navigation} />
      <MainContainer>
        <TodayHotItem />
        <PopularFeed />
        <RecruitTester />
      </MainContainer>
    </ContentWrapper>
  );
};
