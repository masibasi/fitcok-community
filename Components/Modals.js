import React, {useState, useContext, useEffect} from 'react';
import {Image} from 'react-native';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import styled from 'styled-components';
import Modal from 'react-native-modal';

const Container = styled(View)`
  align-items: center;
  flex: 1;
`;
const CloseBtn = styled(TouchableOpacity)`
  width: 343px;
  height: 54px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const CLoseText = styled(Text)`
  font-size: 16px;
  font-weight: 800;
  color: rgb(30, 109, 255);
`;
const DeletePost = styled(TouchableOpacity)`
  width: 343px;
  height: 54px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-bottom-width: 0.1px;
  border-color: rgb(186, 187, 192);
`;
const DeletePostText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: rgb(239, 44, 95);
`;
const EditPost = styled(TouchableOpacity)`
  width: 343px;
  height: 54px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;
const BlueText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: rgb(30, 109, 255);
`;

export const WriterPostMenu = props => {
  const toggleModal = () => {
    props.setModalVisible(!props.isModalVisible);
  };
  const WriterToggleHandler = () => {
    props.setIsWriter(!props.isWriter);
  };
  return (
    <View>
      <Button title="Writer : on" onPress={WriterToggleHandler} />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <DeletePost>
            <DeletePostText>게시글 삭제하기</DeletePostText>
          </DeletePost>
          <EditPost>
            <BlueText>게시글 수정하기</BlueText>
          </EditPost>
          <CloseBtn onPress={toggleModal}>
            <CLoseText>닫기</CLoseText>
          </CloseBtn>
        </Container>
      </Modal>
    </View>
  );
};

export const OtherPostMenu = props => {
  const toggleModal = () => {
    props.setModalVisible(!props.isModalVisible);
  };
  const WriterToggleHandler = () => {
    props.setIsWriter(!props.isWriter);
  };
  return (
    <View>
      <Button title="Writer : off" onPress={WriterToggleHandler} />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <DeletePost>
            <BlueText>게시글 신고하기</BlueText>
          </DeletePost>
          <EditPost>
            <BlueText>게시글 공유하기</BlueText>
          </EditPost>
          <CloseBtn onPress={toggleModal}>
            <CLoseText>닫기</CLoseText>
          </CloseBtn>
        </Container>
      </Modal>
    </View>
  );
};
