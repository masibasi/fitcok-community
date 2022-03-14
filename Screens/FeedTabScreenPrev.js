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
import {Post} from '../Components/Post';
import SearchConditionTab from '../Components/SearchConditionTab';

const MainContainer = styled(ScrollView)`
  background-color: turquoise;
`;
const ContentWrapper = styled(View)`
  flex: 1;
`;
const ButtonWrapper = styled(View)`
  position: absolute;
  bottom: 27px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const WritePostButton = styled(TouchableOpacity)`
  border-radius: 50px;
  width: 100px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: 'rgb(24,25,26)';
`;
const ButtonText = styled(Text)`
  color: 'rgb(255,255,255)';
  font-size: 14px;
  font-weight: bold;
`;
export const FeedTabScreen = ({navigation}) => {
  return (
    <ContentWrapper>
      <TopTab />
      <TopNav title="feed" navigation={navigation} />
      <MainContainer>
        <SearchConditionTab />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </MainContainer>
      <ButtonWrapper>
        <WritePostButton>
          <ButtonText>작성하기</ButtonText>
        </WritePostButton>
      </ButtonWrapper>
    </ContentWrapper>
  );
};
