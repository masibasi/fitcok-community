import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import CommentIcon from '../Icon/icCommentBk24Copy6.svg';
import LikeIcon from '../Icon/icHeartBk18.svg';

import mockData from '../Services/PostMock.json';
const Container = styled(View)`
  height: 134px;
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
`;
const MainWrapper = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
`;
const MainLeftWrapper = styled(View)`
  padding-top: 16px;
`;
const TagWrapper = styled(View)`
  flex-direction: row;
  // background-color: green;
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
  font-weight: bold;
`;

const TitleWrapper = styled(View)`
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
`;
const QuestionIcon = styled(Text)`
  color: rgb(255, 184, 6);
  font-size: 14px;
  font-weight: bold;
`;
const PostTitle = styled(Text)`
  color: 'rgb(24,25,26)';
  font-size: 14px;
`;
const BottomWrapper = styled(View)`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 17px;
  // background-color: gray;
`;
const BottomLeft = styled(View)`
  flex-direction: row;
`;
const BottomRight = styled(View)`
  flex-direction: row;
  margin-right: 4px;
`;

const Likes = styled(Text)`
  color: 'rgb(24,25,26)';
  font-size: 12px;
  margin-left: 4px;
  margin-right: 12px;
  font-weight: 500;
`;
const Comments = styled(Text)`
  color: 'rgb(24,25,26)';
  font-size: 12px;
  margin-left: 4px;
  font-weight: 500;
`;
const ElapsedTime = styled(Text)`
  color: 'rgb(132,133,137)';
  font-size: 11px;
`;
const Nickname = styled(Text)`
  color: 'rgb(132,133,137)';
  font-size: 11px;
`;
const Dot = styled(Text)`
  color: 'rgb(229,230,232)';
  font-size: 11px;
  margin-right: 6px;
  margin-left: 6px;
  font-weight: bold;
`;

const Mock = require('../Img/mockPostImage.png');
const MockImage = styled(Image)``;
const ImageWrapper = styled(View)`
  // background-color: green;
  margin-top: 16px;
`;
const ImageCountWrapper = styled(View)`
  background-color: rgba(0, 0, 0, 0.6);
  width: 27px;
  height: 17px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 4px;
  top: 4px;
`;
const ImageCount = styled(Text)`
  font-size: 11px;
  color: white;
`;
export const Post = props => {
  const {
    datas = {
      title: 'Default Title',
      id: '',
      nickname: '이지민',
      elapsed_time: '999분 전',
      mainText: 'hello my name is jimin',
      isQuestionPost,
      isPopular,
      postTag,
      image,
      likes: '0',
      comments: '-1',
    },
  } = props;

  return (
    <Container>
      <MainWrapper>
        <MainLeftWrapper>
          <TagWrapper>
            {datas.isPopular && (
              <HashtagBox popular>
                <HashTag popular>인기</HashTag>
              </HashtagBox>
            )}
            <HashtagBox>
              <HashTag>{datas.postTag}</HashTag>
            </HashtagBox>
          </TagWrapper>
          <TitleWrapper>
            {datas.isQuestionPost && <QuestionIcon>Q. </QuestionIcon>}

            <PostTitle>{datas.title}</PostTitle>
          </TitleWrapper>
        </MainLeftWrapper>
        {datas.image && (
          <>
            <ImageWrapper>
              <MockImage source={Mock} />
              <ImageCountWrapper>
                <ImageCount>+3</ImageCount>
              </ImageCountWrapper>
            </ImageWrapper>
          </>
        )}
      </MainWrapper>
      <BottomWrapper>
        <BottomLeft>
          <LikeIcon />
          <Likes>{datas.likes}</Likes>
          <CommentIcon />

          <Comments>{datas.comments}</Comments>
        </BottomLeft>
        <BottomRight>
          <Nickname>{datas.nickname}</Nickname>
          <Dot>·</Dot>
          <ElapsedTime>{datas.elapsed_time}</ElapsedTime>
        </BottomRight>
      </BottomWrapper>
    </Container>
  );
};
