import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components';
import {ThemeBox} from '../Components/ThemeBox';
import {TopTab} from '../Components/TopTab_Post';

import LikeIcon from '../Icon/icHeartBk24.svg';
import CommentIcon from '../Icon/icCommentBk24.svg';
const Container = styled(ScrollView)`
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

  padding-right: 6px;
  padding-left: 6px;
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
  align-items: center;
  flex-direction: row;
`;
const Likes = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(70, 71, 72);
  margin-left: 4px;
  margin-right: 16px;
`;
const Comments = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(70, 71, 72);
  margin-left: 4px;
`;
const CommentContainer = styled(View)``;
import SmileyIcon from '../Icon/icSmile24.svg';
export const PostDetailScreen = ({route, navigation}) => {
  const [likeClicked, setLikeClicked] = useState(true);
  const {
    title = 'Default Title',
    id,
    nickname = '이지민',
    elapsed_time = '999분 전',
    mainText = 'hello my name is jimin',
    likes = '-1',
    isQuestionPost,
    isPopular,
    postTag,
    image,
    comments = '-1',
  } = route.params.datas;
  console.log(route.params.datas);
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
      <ButtonContainer>
        <LikeIcon />
        <Likes>{likes}</Likes>
        <CommentIcon />
        <Comments>{comments}</Comments>
      </ButtonContainer>
      <CommentContainer>
        <SmileyIcon />
      </CommentContainer>
    </Container>
  );
};
