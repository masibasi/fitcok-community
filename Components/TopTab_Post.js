import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';
import styled from 'styled-components/native';

import {useToast} from 'react-native-toast-notifications';

import BackIcon from '../Icon/icChevronLeftBk24.svg';
import NotificationIcon from '../Icon/icBellBk24.svg';
import DotMenu from '../Icon/icDotmenuBk24.svg';
import BellOnIcon from '../Icon/icBellonBk24.svg';
import BellOffIcon from '../Icon/icBelloffBk24.svg';

const TopContainer = styled(View)`
  background-color: white;
  height: 56px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 23px;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 8px;
`;

const BackIconWrapper = styled(TouchableOpacity)``;

const RightContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 56px;
`;

const NotificationIconWrapper = styled(TouchableOpacity)``;
const DotMenuWrapper = styled(TouchableOpacity)``;

export const TopTab = props => {
  const toast = useToast();
  const [isBellOn, setIsBellOn] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const toggleModal = () => {
    props.setModalVisible(!props.isModalVisible);
  };
  useEffect(() => {
    if (isFirstVisit) setIsFirstVisit(false);
    else
      isBellOn
        ? toast.show('이 게시글에 대한 알림을 켰습니다')
        : toast.show('이 게시글에 대한 알림을 껐습니다');
  }, [isBellOn]);
  return (
    <TopContainer>
      <BackIconWrapper
        onPress={() => {
          props.navigation.goBack();
        }}>
        <BackIcon />
      </BackIconWrapper>
      <RightContainer>
        <NotificationIconWrapper
          onPress={() => {
            setIsBellOn(!isBellOn);
          }}>
          {isBellOn ? <BellOnIcon /> : <BellOffIcon />}
        </NotificationIconWrapper>
        <DotMenuWrapper onPress={toggleModal}>
          <DotMenu />
        </DotMenuWrapper>
      </RightContainer>
    </TopContainer>
  );
};
