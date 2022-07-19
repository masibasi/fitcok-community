import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  border-top-width: 1px;
  border-color: rgb(246, 246, 248);
  height: 150px;
  padding-left: 16px;
  padding-top: 16px;
  padding-right: 16px;
  justify-content: space-between;
`;
export const ContentWrapper = styled(View)``;
export const TopWrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 4px;
  justify-content: space-between;
`;
export const WriterWrapper = styled(View)`
  flex-direction: row;
`;
export const Writer = styled(Text)`
  color: black;
  font-size: 12px;
  font-weight: 800;
  padding-right: 4px;
`;
export const DotMenuWrapper = styled(TouchableOpacity)``;
export const CommentText = styled(Text)`
  color: rgb(70, 71, 72);
  line-height: 22px;
  font-size: 14px;
`;
export const BottomWrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 12px;
`;
export const DaysAgo = styled(Text)`
  color: rgb(132, 133, 137);
  padding-right: 8px;
  border-right-width: 1px;
  border-color: rgb(229, 230, 232);
  font-size: 12px;
`;
export const AddCommentWrapper = styled(TouchableOpacity)``;
export const AddCommentForComment = styled(Text)`
  font-size: 12px;
  color: rgb(132, 133, 137);
  padding-left: 8px;
`;
export const MoreButtonWrapper = styled(TouchableOpacity)`
  height: 20px;
  width: 100%;
  margin-left: 53px;
  margin-top: 4px;
  margin-bottom: 12px;
  align-items: center;
  flex-direction: row;
  // background-color: black;
`;
export const MoreButtonText = styled(Text)`
  color: rgb(132, 133, 137);
  font-size: 12px;
`;
export const Line = styled(View)`
  width: 16px;
  height: 1px;
  margin-right: 8px;

  border-color: rgb(132, 133, 137);
  border-top-width: 1px;
`;
export const ReCommentTextInput = styled(TextInput).attrs({
  placeholder: '댓글을 입력해주세요.',
  placeholderTextColor: 'rgb(186, 187, 192)',
  fontSize: 12,
})`
  height: 32px;
  margin-left: 53px;
  margin-right: 16px;
  margin-bottom: 12px;
  border-radius: 22px;
  border-color: rgb(229, 230, 232);
  border-width: 1px;
  padding-left: 12px;
  padding-bottom: 6px;
`;
