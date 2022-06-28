import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import styled from 'styled-components';
import {ThemeBox} from '../Components/ThemeBox';
import {TopTab} from '../Components/TopTab_Post';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {NoCommentDisplay} from '../Components/NoCommentDisplay';

import LikeIcon from '../Icon/icHeartBk24.svg';
import CommentIcon from '../Icon/icCommentBk24.svg';

import {Comment} from '../Components/Comment';

const Container = styled(KeyboardAwareScrollView)`
  background-color: white;
  flex: 1;
`;
const PostDetailWrapper = styled(View)`
  justify-content: flex-end;
  flex: 1;
`;

const MainContainer = styled(View)`
  margin-top: 1px;
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
  line-height: 22px;
  letter-spacing: -0.2px;
`;
const ButtonContainer = styled(View)`
  height: 48px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: rgb(246, 246, 248);
  padding-left: 16px;
  align-items: center;
  flex-direction: row;
  background-color: white;
`;
const Likes = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(70, 71, 72);
  margin-left: 4px;
  margin-right: 16px;
`;
const LikeButtonWrapper = styled(TouchableOpacity)``;
const CommentButtonWrapper = styled(TouchableOpacity)``;
const Comments = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(70, 71, 72);
  margin-left: 4px;
`;

const EnterCommentWrapper = styled(View)`
  background-color: white;
  shadow-color: rgb(0, 0, 0);

  shadow-opacity: 0.1;
  shadow-radius: 9px;
  elevation: 5;
`;
const EnterComment = styled(TextInput).attrs({
  placeholder: '댓글을 입력해주세요.',
  placeholderTextColor: 'rgb(116, 117, 118)',
})`
  height: 40px;
  background-color: rgb(246, 246, 248);
  margin: 10px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 30px;
  padding-left: 16px;
  padding-right: 40px;
`;
const EnterCommentBtn = styled(TouchableOpacity)`
  background-color: rgb(186, 187, 192);
  border-radius: 30px;
  width: 28px;
  height: 28px;
  position: absolute;
  right: 22px;
  top: 16px;
`;
const Spacer = styled(View)`
  height: 80px;
`;

export const PostDetailScreen = ({route, navigation}) => {
  let {
    title = 'Default Title',
    id = 0,
    nickname = '이지민',
    elapsed_time = '999분 전',
    mainText = 'hello my name is jimin',
    likes = '-1',
    isQuestionPost = false,
    isPopular = false,
    postTag = false,
    image = null,
    comments = '-1',
    comment = [],
  } = route.params.datas;
  return (
    <PostDetailWrapper>
      <TopTab navigation={navigation} />
      <Container>
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
          <LikeButtonWrapper onPress={() => (likes = likes + 1)}>
            <LikeIcon />
          </LikeButtonWrapper>
          <Likes>{likes}</Likes>
          <CommentButtonWrapper>
            <CommentIcon />
          </CommentButtonWrapper>
          <Comments>{comments}</Comments>
        </ButtonContainer>
        {comments > 0 ? (
          <>
            {comment.map(cmt => {
              return <Comment key={cmt.commentId} item={cmt} />;
            })}
            <Spacer />
          </>
        ) : (
          <NoCommentDisplay />
        )}
      </Container>
      <EnterCommentWrapper>
        <EnterComment />
        <EnterCommentBtn />
      </EnterCommentWrapper>
    </PostDetailWrapper>
  );
};
