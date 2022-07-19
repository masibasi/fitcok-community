import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';

import InfoIcon from '../Icon/icInformationGray16.svg';
const Container = styled(View)`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  align-items: center;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: rgb(246, 246, 248);
`;
const GrayText = styled(Text)`
  color: rgb(132, 133, 137);
  line-height: 20px;
  font-size: 12px;
  letter-spacing: -0.2px;
  margin-left: 4px;
`;
export const DeletedComment = props => {
  return (
    <Container>
      <InfoIcon />
      <GrayText>댓글 작성자가 삭제한 댓글입니다.</GrayText>
    </Container>
  );
};
