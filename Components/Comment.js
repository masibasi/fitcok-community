import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import CommentIcon from '../Icon/icCommentBk24Copy6.svg';
import DotMenu from '../Icon/icDotmenuBk24.svg';
import WriterBadge from '../Icon/communityBadge.svg';

import {ReComment} from './ReComment';

const Container = styled(View)`
  border-top-width: 1px;
  border-color: rgb(246, 246, 248);
  height: 150px;
  // background-color: red;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
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
  margin-bottom: 12px;
`;
const DaysAgo = styled(Text)`
  color: rgb(132, 133, 137);
  padding-right: 8px;
  border-right-width: 1px;
  border-color: rgb(229, 230, 232);
  font-size: 12px;
`;
const AddCommentWrapper = styled(TouchableOpacity)``;
const AddCommentForComment = styled(Text)`
  font-size: 12px;
  color: rgb(132, 133, 137);
  padding-left: 8px;
`;
export const Comment = props => {
  const {
    title = 'Default Title',
    id = '',
    nickname = '이지민',
    elapsed_time = '999분 전',
    mainText = 'hello my name is jimin',
    isQuestionPost = false,
    isPopular = false,
    postTag = null,
    image = null,
    likes = '0',
    comments = '-1',
    writer = true,
    recomment = [],
  } = props.item;

  return (
    <>
      <Container>
        <ContentWrapper>
          <TopWrapper>
            <WriterWrapper>
              <Writer>{nickname}</Writer>
              {writer ? <WriterBadge /> : null}
            </WriterWrapper>
            <DotMenuWrapper>
              <DotMenu />
            </DotMenuWrapper>
          </TopWrapper>
          <CommentText>{mainText}</CommentText>
        </ContentWrapper>
        <BottomWrapper>
          <DaysAgo>1달전</DaysAgo>
          <AddCommentWrapper>
            <AddCommentForComment>답글쓰기</AddCommentForComment>
          </AddCommentWrapper>
        </BottomWrapper>
      </Container>
      {recomment.map(recomment => {
        return <ReComment key={recomment.recommentId} item={recomment} />;
      })}
    </>
  );
};
