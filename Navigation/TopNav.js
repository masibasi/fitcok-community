import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components/native';

import {CategoryContextProvider} from '../Services/Categories/categories.context';

const Container = styled(View)`
  height: 56px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;
const AllTitle = styled(Text)`
  margin-right: 24px;
  font-size: 16px;
  font-weight: ${props => (props.title == 'all' ? 'bold' : 400)};
  color: ${props => (props.title == 'all' ? 'black' : 'rgb(151,151,151)')};
`;
const PopularTitle = styled(Text)`
  margin-right: 24px;
  font-size: 16px;
  font-weight: ${props => (props.title == 'feed' ? 'bold' : 400)};
  color: ${props => (props.title == 'feed' ? 'black' : 'rgb(151,151,151)')};
`;
const ThemeTitle = styled(Text)`
  margin-right: 24px;
  font-size: 16px;
  font-weight: ${props => (props.title == 'theme' ? 'bold' : 400)};
  color: ${props => (props.title == 'theme' ? 'black' : 'rgb(151,151,151)')};
`;

const AllTabButton = styled(TouchableOpacity)``;
const FeedTabButton = styled(TouchableOpacity)``;
const GroupTabButton = styled(TouchableOpacity)``;
const ThemeTabButton = styled(TouchableOpacity)``;

const Highlight = styled(View)`
  position: absolute;
  width: ${props =>
    props.all ? '28px' : props.feed ? '30px' : props.group ? '40px' : '30px'};
  height: 8px;
  background-color: 'rgb(255,184,6)';
  bottom: 17px;
  left: ${props =>
    props.all ? '16px' : props.feed ? '72px' : props.group ? '120px' : '199px'};
`;
export const TopNav = props => {
  let tabTitle = props.title;
  let navigation = props.navigation;
  return (
    <CategoryContextProvider>
      <Container>
        {tabTitle === 'all' ? (
          <Highlight all />
        ) : tabTitle === 'feed' ? (
          <Highlight feed />
        ) : tabTitle === 'group' ? (
          <Highlight group />
        ) : (
          <Highlight test />
        )}

        <AllTabButton onPress={() => navigation.navigate('전체')}>
          <AllTitle title={tabTitle}>전체</AllTitle>
        </AllTabButton>
        <FeedTabButton onPress={() => navigation.navigate('피드')}>
          {/*여기 인기탭 만들면 바꿔줘야함 */}
          <PopularTitle title={tabTitle}>인기</PopularTitle>
        </FeedTabButton>

        <ThemeTabButton onPress={() => navigation.navigate('체험단')}>
          <ThemeTitle title={tabTitle}>테마1</ThemeTitle>
        </ThemeTabButton>
        <ThemeTabButton onPress={() => navigation.navigate('체험단')}>
          <ThemeTitle title={tabTitle}>테마2</ThemeTitle>
        </ThemeTabButton>
        <ThemeTabButton onPress={() => navigation.navigate('체험단')}>
          <ThemeTitle title={tabTitle}>테마3</ThemeTitle>
        </ThemeTabButton>
      </Container>
    </CategoryContextProvider>
  );
};
