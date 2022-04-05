import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components';
import {ThemeBox} from '../Components/ThemeBox';
import {TopTab} from '../Components/TopTab_Post';

const Container = styled(ScrollView)`
  flex: 1;
  background-color: white;
`;
const MainContainer = styled(View)`
  margin-top: 4px;
  border-color: rgb(246, 246, 248);
  border-top-width: 1px;
  background-color: white;
  padding: 16px;
  padding-bottom: 24px;
`;
const PostTitle = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  color: rgb(24, 25, 26);
  padding-top: 8px;
`;

const DetailsWrapper = styled(View)`
  flex-direction: row;
  padding-top: 4px;
`;
const Nickname = styled(Text)`
  font-size: 11px;
  font-weight: 400;
  color: rgb(116, 117, 118);
`;
const Dot = styled(Text)`
  font-size: 11px;
  font-weight: 400;
  color: rgb(229, 230, 232);
`;
const ElapsedTime = styled(Text)`
  font-size: 11px;
  font-weight: 400;
  color: rgb(116, 117, 118);
`;
const MainText = styled(Text)`
  margin-top: 32px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(70, 71, 72);
`;
const ButtonContainer = styled(View)`
  height: 48px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: rgb(246, 246, 248);
  padding-left: 16px;
  align-itmes: center;
  flex-direction: row;
`;

import Mockdata from '../Services/PostMock.json';
export const PostDetailScreen = ({datas = {}, navigation}) => {
  const {
    title = 'Default Title',
    id,
    nickname = '이지민',
    elapsed_time = '999분 전',
    mainText = 'hello my name is jimin',
  } = datas;
  console.log(datas);
  return (
    <Container>
      <TopTab navigation={navigation} />
      <MainContainer>
        <ThemeBox />
        <PostTitle>{title}</PostTitle>
        <DetailsWrapper>
          <Nickname>{nickname}</Nickname>
          <Dot>·</Dot>
          <ElapsedTime>{elapsed_time}</ElapsedTime>
        </DetailsWrapper>
        <MainText>{mainText}</MainText>
      </MainContainer>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
};
