import React, {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {PostContext} from '../Services/Posts/posts.context';

const Container = styled(View)`
  flex: 1;
`;
const TopTab = styled(View)`
  flex-direction: row;
  padding-top: 25px;
  justify-content: center;
`;
import BackIcon from '../Icon/icChevronLeftBk24.svg';
const Icon = styled(BackIcon)`
  position: absolute;
  left: 16px;
  top: 24px;
`;
const Title = styled(Text)`
  color: rgb(0, 0, 0);
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.2px;
  font-weight: 800;
`;
const CommentInputWrapper = styled(View)`
  width: 100%;
  height: 134px;
  padding: 12px;
  margin: 16px;
  margin-top: 24px;
  border-radius: 6px;
  border-width: 1px;
  border-color: rgb(229, 230, 232);
`;

const CommentInput = styled(TextInput).attrs({
  multiline: true,
})`
  padding: 0px;
`;
const CompleteButton = styled(TouchableOpacity)`
  background-color: rgb(0, 0, 0);
  height: 56px;
  weight: 100%;
  align-items: center;
  justify-content: center;
`;
const CompleteText = styled(Text)`
  color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  font-weight: 800;
`;
export const EditCommentScreen = ({route, navigation}) => {
  const {postId, commentId} = route.params;
  const {posts, setPosts} = useContext(PostContext);
  const [editText, setEditText] = useState('');
  const OnChangeTextHandler = text => {
    setEditText(text);
  };
  const CompleteButtonToggleHandler = () => {
    updatePost();
    navigation.goBack();
  };
  const updatePost = () => {
    let tempPost = posts;
    tempPost[postId].comment[commentId].mainText = editText;
    console.log('Edit Comment to : ' + editText);
    setPosts([...tempPost]);
  };
  return (
    <Container>
      <TopTab>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Title>댓글수정</Title>
      </TopTab>
      <CommentInputWrapper>
        <CommentInput onChangeText={OnChangeTextHandler} />
      </CommentInputWrapper>
      <View style={{flex: 1}} />
      <CompleteButton onPress={CompleteButtonToggleHandler}>
        <CompleteText>수정완료</CompleteText>
      </CompleteButton>
    </Container>
  );
};
