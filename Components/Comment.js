import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  margin-bottom: auto;
  align-items: center;
  padding-top: 48px;
  padding-bottom: 10px;
  background-color: white;
  height: 100%;
`;
const SmileyIconWrapper = styled(View)`
  padding: 16px;
  padding-top: 0px;
`;
const NoCommentText = styled(Text)`
  color: rgb(132, 133, 137);
  font-size: 14px;
  font-weight: 500;
`;

const EnterCommentWrapper = styled(View)`
  background-color: white;
`;
const EnterComment = styled(TextInput).attrs({
  placeholder: '댓글을 입력해주세요.',
})`
  height: 40px;
  background-color: rgb(246, 246, 248);
  margin: 10px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 30px;
  padding-left: 16px;
  padding-right: 40px;
`;
const EnterCommentBtn = styled(TouchableOpacity)`
  background-color: rgb(186, 187, 192);
  border-radius: 30px;
  width: 28px;
  height: 28px;
  position: absolute;
  right: 22px;
  top: 16px;
`;

import SmileyIcon from '../Icon/icSmile24.svg';

export const Comment = () => {
  return (
    <Container>
      <SmileyIconWrapper>
        <SmileyIcon />
      </SmileyIconWrapper>
      <NoCommentText>아직 작성된 댓글이 없습니다.</NoCommentText>
      <NoCommentText>새로운 댓글을 남겨주세요</NoCommentText>
    </Container>
  );
};
