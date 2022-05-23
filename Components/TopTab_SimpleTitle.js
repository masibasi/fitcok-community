import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';
import styled from 'styled-components/native';

import {useToast} from 'react-native-toast-notifications';

import XBtnIcon from '../Icon/icCloseBk24.svg';

const TopContainer = styled(View)`
  background-color: white;
  height: 56px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 25px;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 8px;
`;
const Spacer = styled(View)`
  width: 24px;
`;
const TabTitle = styled(Text)`
  font-size: 14px;
  font-weight: 800;

  color: black;
`;

const XBtnWrapper = styled(TouchableOpacity)``;

export const TopTab = props => {
  let tabTitle = props.title;
  let navigation = props.navigation;

  const toast = useToast();
  return (
    <TopContainer>
      <Spacer></Spacer>
      <TabTitle>{tabTitle}</TabTitle>
      <XBtnWrapper
        onPress={() => {
          navigation.goBack();
        }}>
        <XBtnIcon />
      </XBtnWrapper>
    </TopContainer>
  );
};
