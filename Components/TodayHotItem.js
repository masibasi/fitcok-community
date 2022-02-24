import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  height: 268px;
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
  width: 260px;
  height: 166px;
  border-radius: 8px;
  margin-left: 16px;
`;
export const TodayHotItem = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title source={require('../Img/todayHotTitle.png')} />
        <Emoji source={require('../Img/mainEmoji4.png')} />
      </TitleWrapper>

      <HotItems horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image1 source={require('../Img/bosam.png')} />
        <Image1 source={require('../Img/jokbal.png')} />
      </HotItems>
    </Container>
  );
};
