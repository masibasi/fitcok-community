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
  font-weight: ${props => (props.title == 'popular' ? 'bold' : 400)};
  color: ${props => (props.title == 'popular' ? 'black' : 'rgb(151,151,151)')};
`;
const GroupTabTitle = styled(Image)`
  margin-right: 24px;
`;
const TestTabTitle = styled(Image)`
  margin-right: 24px;
`;
const AllTabButton = styled(TouchableOpacity)``;
const FeedTabButton = styled(TouchableOpacity)``;
const GroupTabButton = styled(TouchableOpacity)``;
const TestTabButton = styled(TouchableOpacity)``;

const Highlight = styled(View)`
  position: absolute;
  width: ${props =>
    props.all ? '31px' : props.feed ? '24px' : props.group ? '40px' : '30px'};
  height: 8px;
  background-color: 'rgb(255,184,6)';
  bottom: 17px;
  left: ${props =>
    props.all ? '17px' : props.feed ? '68px' : props.group ? '120px' : '199px'};
`;
export const TopNav = props => {
  let tabTitle = props.title;
  let navigation = props.navigation;
  return (
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
      <GroupTabButton onPress={() => navigation.navigate('공동구매')}>
        <GroupTabTitle source={require('../Img/groupTabTitle.png')} />
      </GroupTabButton>
      <TestTabButton onPress={() => navigation.navigate('체험단')}>
        <TestTabTitle source={require('../Img/testTabTitle.png')} />
      </TestTabButton>
    </Container>
  );
};
