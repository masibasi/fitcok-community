import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Post} from '../Components/Post';
import SearchConditionTab from '../Components/SearchConditionTab';
import {TopTab} from '../Components/TopTab_SimpleTitle';
import {CategoryComponent} from '../Components/CategoryComponent';
import {NotificationComponent} from '../Components/NotificationComponent';

const ContentWrapper = styled(View)`
  flex: 1;
`;
const MainContainer = styled(View)`
  background-color: white;
  flex: 1;
  //   padding-left: 16px;
  //   padding-right: 16px;
`;
const TitleText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(24, 25, 26);
  margin-bottom: 16px;
`;
const OrderWrapper = styled(View)`
  flex-direction: row;
`;
const OrderBtn = styled(TouchableOpacity)`
  padding: 0px;
  width: 81px;
  height: 36px;
  border-radius: 22px;
  border-width: 1px;
  border-color: ${props => (props.isclicked ? 'black' : 'rgb(229,230,232)')};
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isclicked ? 'black' : 'white')};
`;
const OrderBtnText = styled(Text)`
  color: ${props => (props.isclicked ? 'white' : 'rgb(132,133,137)')};
  font-size: 12px;
`;
const BottomContainer = styled(View)`
  flex: 1
  background-color: white;

`;
const CategoryText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(24, 25, 26);
  margin-top: 24px;
  margin-bottom: 16px;
`;
export const NotificationsScreen = ({navigation}) => {
  const [orderNew, setOrderNew] = useState(true);
  const [orderPop, setOrderPop] = useState(false);
  return (
    <ContentWrapper>
      <TopTab title="알림" navigation={navigation} />
      <MainContainer>
        <NotificationComponent
          tag="피트니스"
          text="공지사항 제목이 들어갑니다"
          time="2021년 6월 30일 14:00"
        />
        <NotificationComponent
          tag="이벤트"
          text="공지사항 제목이 들어갑니다"
          time="2021년 6월 30일 14:00"
        />
        <NotificationComponent
          tag="커뮤니티"
          text="공지사항 제목이 들어갑니다"
          time="2021년 6월 30일 14:00"
        />
        <NotificationComponent
          tag="공지"
          text="공지사항 제목이 들어갑니다"
          time="2021년 6월 30일 14:00"
        />
        <NotificationComponent
          tag="커머스"
          text="공지사항 제목이 들어갑니다"
          time="2021년 6월 30일 14:00"
        />
        <NotificationComponent
          text="공지사항 제목이 들어갑니다"
          time="2021년 6월 30일 14:00"
        />
        <NotificationComponent
          text="공지사항 제목이 들어갑니다"
          time="2021년 6월 30일 14:00"
        />
      </MainContainer>
    </ContentWrapper>
  );
};
