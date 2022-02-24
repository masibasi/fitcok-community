import React from 'react';
import {View, Text} from 'react-native';
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
  justify-content: space-between;
`;
const HashtagBox = styled(View)`
  background-color: 'rgb(246,246,248)';
  width: 58px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;
const HashTag = styled(Text)`
  color: 'rgb(158,161,168)';
  font-size: 10px;
`;
const ElapsedTime = styled(Text)`
  color: 'rgb(132,133,137)';
  font-size: 11px;
`;
const PostTitle = styled(Text)`
  margin-top: 12px;
  color: 'rgb(24,25,26)';
  font-size: 14px;
`;
const BottomWrapper = styled(View)`
  margin-top: 24px;
  flex-direction: row;
`;
const Likes = styled(Text)`
  color: 'rgb(24,25,26)';
  font-size: 12px;
`;
const Comments = styled(Text)`
  color: 'rgb(24,25,26)';
  font-size: 12px;
  margin-left: 16px;
`;
export const Post = () => {
  return (
    <Container>
      <TopWrapper>
        <HashtagBox>
          <HashTag>#다이어트</HashTag>
        </HashtagBox>
        <ElapsedTime>1분전</ElapsedTime>
      </TopWrapper>
      <PostTitle>다이어트 식단관리 다들 어떻게 하시나요?</PostTitle>
      <BottomWrapper>
        <Likes>좋아요 12</Likes>
        <Comments>댓글 8</Comments>
      </BottomWrapper>
    </Container>
  );
};
