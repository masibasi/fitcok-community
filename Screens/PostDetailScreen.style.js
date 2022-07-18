import React from 'react';

import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import styled from 'styled-components';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Container = styled(KeyboardAwareScrollView)`
  background-color: white;
  flex: 1;
`;
export const PostDetailWrapper = styled(View)`
  justify-content: flex-end;
  flex: 1;
`;

export const MainContainer = styled(View)`
  margin-top: 1px;
  border-color: rgb(246, 246, 248);
  border-top-width: 1px;
  background-color: white;
  padding: 16px;
  padding-bottom: 24px;
`;
export const PostTitle = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  color: rgb(24, 25, 26);
  padding-top: 8px;
`;

export const DetailsWrapper = styled(View)`
  flex-direction: row;
  padding-top: 4px;
`;
export const Nickname = styled(Text)`
  font-size: 11px;
  font-weight: 400;
  color: rgb(116, 117, 118);
`;
export const Dot = styled(Text)`
  font-size: 11px;
  font-weight: 400;
  color: rgb(229, 230, 232);

  padding-right: 6px;
  padding-left: 6px;
`;
export const ElapsedTime = styled(Text)`
  font-size: 11px;
  font-weight: 400;
  color: rgb(116, 117, 118);
`;
export const MainText = styled(Text)`
  margin-top: 32px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(70, 71, 72);
  line-height: 22px;
  letter-spacing: -0.2px;
`;
export const ButtonContainer = styled(View)`
  height: 48px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: rgb(246, 246, 248);
  padding-left: 16px;
  align-items: center;
  flex-direction: row;
  background-color: white;
`;
export const Likes = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(70, 71, 72);
  margin-left: 4px;
  margin-right: 16px;
`;
export const LikeButtonWrapper = styled(TouchableOpacity)``;
export const CommentButtonWrapper = styled(TouchableOpacity)``;
export const Comments = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(70, 71, 72);
  margin-left: 4px;
`;

export const EnterCommentWrapper = styled(View)`
  background-color: white;
  shadow-color: rgb(0, 0, 0);

  shadow-opacity: 0.1;
  shadow-radius: 9px;
  elevation: 5;
`;
export const EnterComment = styled(TextInput).attrs({
  placeholder: '댓글을 입력해주세요.',
  placeholderTextColor: 'rgb(116, 117, 118)',
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
export const EnterCommentBtn = styled(TouchableOpacity)`
  background-color: rgb(186, 187, 192);
  border-radius: 30px;
  width: 28px;
  height: 28px;
  position: absolute;
  right: 22px;
  top: 16px;
`;
export const Spacer = styled(View)`
  height: 80px;
`;
export const ImgSpacer = styled(View)`
  height: 4px;
`;
export const FlatListItemSeperator = () => {
  return (
    <View
      style={{
        width: 4,
        backgroundColor: 'white',
      }}
    />
  );
};
export const ImgList = styled(FlatList).attrs({
  contentContainerStyle: {
    //padding: 16,
  },
  horizontal: true,
})`
  margin-top: 24px;
`;
