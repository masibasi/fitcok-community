import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import CommentIcon from '../Icon/icCommentBk24Copy6.svg';
import DotMenu from '../Icon/icDotmenuBk24.svg';
import WriterBadge from '../Icon/communityBadge.svg';
import mockData from '../Services/PostMock.json';

const Container = styled(View)`
  border-top-width: 1px;
  border-color: rgb(246, 246, 248);
  border-radius: 6px;
  height: 110px;
  background-color: rgb(246, 246, 248);
  margin-left: 53px;
  margin-right: 16px;
  margin-bottom: 8px;
  padding: 16px;
  justify-content: space-between;
`;
const ContentWrapper = styled(View)``;
const TopWrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 4px;
  justify-content: space-between;
`;
const WriterWrapper = styled(View)`
  flex-direction: row;
`;
const Writer = styled(Text)`
  color: black;
  font-size: 12px;
  font-weight: 800;
  padding-right: 4px;
`;
const DotMenuWrapper = styled(TouchableOpacity)``;
const CommentText = styled(Text)`
  color: rgb(70, 71, 72);
  line-height: 22px;
  font-size: 14px;
`;
const BottomWrapper = styled(View)`
  flex-direction: row;
`;
const DaysAgo = styled(Text)`
  color: rgb(132, 133, 137);
  padding-right: 8px;
  font-size: 12px;
`;
const AddCommentWrapper = styled(TouchableOpacity)``;
const AddCommentForComment = styled(Text)`
  font-size: 12px;
  color: rgb(132, 133, 137);
  padding-left: 8px;
`;
export const ReComment = props => {
  const {
    recommentId = 0,
    nickname = '매콤한 1',
    elapsedTime = '213',
    mainText = '저도 4 5 6',
  } = props.item;

  return (
    <Container>
      <ContentWrapper>
        <TopWrapper>
          <WriterWrapper>
            <Writer>{nickname}</Writer>
          </WriterWrapper>
          <DotMenuWrapper>
            <DotMenu />
          </DotMenuWrapper>
        </TopWrapper>
        <CommentText>{mainText}</CommentText>
      </ContentWrapper>
      <BottomWrapper>
        <DaysAgo>{elapsedTime}</DaysAgo>
      </BottomWrapper>
    </Container>
  );
};
