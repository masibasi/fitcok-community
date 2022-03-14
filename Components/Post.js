import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  height: 134px;
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
`;
const TopWrapper = styled(View)`
  margin-top: 16px;
  flex-direction: row;
`;
const HashtagBox = styled(View)`
  background-color: ${props =>
    props.popular ? 'rgb(255,184,6)' : 'rgb(246,246,248)'};
  width: 35px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  border-radius: 3px;
`;
const HashTag = styled(Text)`
  color: ${props => (props.popular ? 'white' : 'rgb(158,161,168)')};
  font-size: 10px;
`;

const PostTitle = styled(Text)`
  margin-top: 12px;
  color: 'rgb(24,25,26)';
  font-size: 14px;
`;
const BottomWrapper = styled(View)`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;
const BottomLeft = styled(View)`
  flex-direction: row;
`;
const BottomRight = styled(View)`
  flex-direction: row;
  margin-right: 16px;
`;
const LikeHeart = require('../Img/icHeartBk18.png');
const Likes = styled(Text)`
  color: 'rgb(24,25,26)';
  font-size: 12px;
  margin-left: 4px;
  margin-right: 12px;
`;
const CommentIcon = require('../Img/icCommentBk24.png');
const Comments = styled(Text)`
  color: 'rgb(24,25,26)';
  font-size: 12px;
  margin-left: 4px;
`;
const ElapsedTime = styled(Text)`
  color: 'rgb(132,133,137)';
  font-size: 11px;
`;
const Nickname = styled(Text)`
  color: 'rgb(132,133,137)';
  font-size: 11px;
  margin-right: 15px;
`;
export const Post = props => {
  return (
    <Container>
      <TopWrapper>
        {props.popular ? (
          <HashtagBox popular>
            <HashTag popular>인기</HashTag>
          </HashtagBox>
        ) : null}
        <HashtagBox>
          <HashTag>{props.tag}</HashTag>
        </HashtagBox>
      </TopWrapper>
      <PostTitle>다이어트 식단관리 다들 어떻게 하시나요?</PostTitle>
      <BottomWrapper>
        <BottomLeft>
          <Image source={LikeHeart} />
          <Likes>12</Likes>
          <Image source={CommentIcon} />
          <Comments>8</Comments>
        </BottomLeft>
        <BottomRight>
          <Nickname>닉네임</Nickname>
          <ElapsedTime>1분전</ElapsedTime>
        </BottomRight>
      </BottomWrapper>
    </Container>
  );
};
