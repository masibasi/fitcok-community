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

const writeIcon = require('../Img/icPencilWhite24.png');

const MainContainer = styled(ScrollView)`
  // background-color: turquoise;
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
  width: 127px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background-color: 'rgb(24,25,26)';
  flex-direction: row;
`;
const ButtonText = styled(Text)`
  color: 'rgb(255,255,255)';
  font-size: 14px;
  font-weight: bold;
  margin-right: 6px;
  margin-left: 6px;
`;
export const AllTabScreen = ({navigation}) => {
  return (
    <ContentWrapper>
      <TopTab />
      <TopNav title="all" navigation={navigation} />
      <MainContainer>
        <Post tag="테마1" />
        <Post tag="테마1" popular={true} />
        <Post tag="테마1" question />
        <Post tag="테마1" image />
        <Post tag="테마1" />
        <Post tag="테마1" />
        <Post tag="테마1" />
      </MainContainer>
      <ButtonWrapper>
        <WritePostButton>
          <Image source={writeIcon} />
          <ButtonText>글 쓰기</ButtonText>
        </WritePostButton>
      </ButtonWrapper>
    </ContentWrapper>
  );
};
