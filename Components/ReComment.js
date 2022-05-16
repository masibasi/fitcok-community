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
    datas = {
      title: 'Default Title',
      id: '',
      nickname: '이지민',
      elapsed_time: '999분 전',
      mainText: 'hello my name is jimin',
      isQuestionPost: false,
      isPopular: false,
      postTag: null,
      image: null,
      likes: '0',
      comments: '-1',
      writer: true,
    },
  } = props;

  return (
    <Container>
      <ContentWrapper>
        <TopWrapper>
          <WriterWrapper>
            <Writer>매콤한 닭가슴살</Writer>
          </WriterWrapper>
          <DotMenuWrapper>
            <DotMenu />
          </DotMenuWrapper>
        </TopWrapper>
        <CommentText>저도 샐러드로 다이어트 성공했어요</CommentText>
      </ContentWrapper>
      <BottomWrapper>
        <DaysAgo>1달전</DaysAgo>
      </BottomWrapper>
    </Container>
  );
};
