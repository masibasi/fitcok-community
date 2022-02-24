import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {Post} from './Post';

const Container = styled(View)`
  height: 572px;
  padding-top: 32px;
  background-color: white;
`;
const TitleWrapper = styled(View)`
  flex-direction: row;
`;
const Title = styled(Image)`
  margin-left: 16px;
`;
const Emoji = styled(Image)`
  margin-left: 4px;
`;
const SeeAllButton = styled(TouchableOpacity)`
  border-radius: 50px;
  width: 311px;
  height: 44px;
  border-width: 1px;
  border-color: 'rgb(209,210,214)';
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const BottomWrapper = styled(View)`
  position: absolute;
  bottom: 32px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Text1 = styled(Text)`
  color: 'rgb(108,103,230)';
  font-size: 14px;
  font-weight: bold;
`;
const Text2 = styled(Text)`
  //   color: 'rgb(108,103,230)';
  font-size: 14px;
  font-weight: bold;
`;
export const PopularFeed = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title source={require('../Img/todayHotTitle.png')} />
        <Emoji source={require('../Img/mainEmoji4Copy.png')} />
      </TitleWrapper>
      <Post />
      <Post />
      <Post />
      <BottomWrapper>
        <SeeAllButton>
          <Text1>인기피드 </Text1>
          <Text2>전체보기 ></Text2>
        </SeeAllButton>
      </BottomWrapper>
    </Container>
  );
};
