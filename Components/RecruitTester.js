import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  height: 342px;
  padding-top: 32px;
  background-color: 'rgb(246,246,248)';
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
const HotItems = styled(ScrollView)`
  margin-top: 16px;
`;
const Image1 = styled(Image)`
  width: 200px;
  height: 240px;
  border-radius: 8px;
  margin-left: 16px;
`;
export const RecruitTester = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title source={require('../Img/todayHotTitle.png')} />
        <Emoji source={require('../Img/mainEmoji4Copy2.png')} />
      </TitleWrapper>

      <HotItems horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image1 source={require('../Img/tester.png')} />
        <Image1 source={require('../Img/tester.png')} />
      </HotItems>
    </Container>
  );
};
