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
const TopHalfMenu = styled(TouchableOpacity)`
  width: 343px;
  height: 54px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 0.1px;
  border-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.85);
`;
const RedText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: rgb(239, 44, 95);
`;
const BottomHalfMenu = styled(TouchableOpacity)`
  width: 343px;
  height: 54px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  background-color: rgba(255, 255, 255, 0.85);
`;
const BlueText = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: rgb(30, 109, 255);
`;

const OneMenu = styled(TouchableOpacity)`
  width: 343px;
  height: 54px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  background-color: rgba(255, 255, 255, 0.85);
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
      <Button title="Post Writer : on" onPress={WriterToggleHandler} />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <TopHalfMenu>
            <RedText>게시글 삭제하기</RedText>
          </TopHalfMenu>
          <BottomHalfMenu>
            <BlueText>게시글 수정하기</BlueText>
          </BottomHalfMenu>
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
      <Button title="Post Writer : off" onPress={WriterToggleHandler} />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <TopHalfMenu>
            <BlueText>게시글 신고하기</BlueText>
          </TopHalfMenu>
          <BottomHalfMenu>
            <BlueText>게시글 공유하기</BlueText>
          </BottomHalfMenu>
          <CloseBtn onPress={toggleModal}>
            <CLoseText>닫기</CLoseText>
          </CloseBtn>
        </Container>
      </Modal>
    </View>
  );
};

export const MyCommentMenu = props => {
  const toggleModal = () => {
    props.setModalVisible(!props.isModalVisible);
  };
  const WriterToggleHandler = () => {
    props.setIsWriter(!props.isWriter);
  };
  return (
    <View>
      <Button title="Comment Writer : on" onPress={WriterToggleHandler} />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <TopHalfMenu>
            <RedText>댓글 삭제하기</RedText>
          </TopHalfMenu>
          <BottomHalfMenu>
            <BlueText>댓글 수정하기</BlueText>
          </BottomHalfMenu>
          <CloseBtn onPress={toggleModal}>
            <CLoseText>닫기</CLoseText>
          </CloseBtn>
        </Container>
      </Modal>
    </View>
  );
};

export const OtherCommentMenu = props => {
  const toggleModal = () => {
    props.setModalVisible(!props.isModalVisible);
  };
  const WriterToggleHandler = () => {
    props.setIsWriter(!props.isWriter);
  };
  return (
    <View>
      <Button title="Comment Writer : off" onPress={WriterToggleHandler} />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <OneMenu>
            <RedText>게시글 신고하기</RedText>
          </OneMenu>
          <CloseBtn onPress={toggleModal}>
            <CLoseText>닫기</CLoseText>
          </CloseBtn>
        </Container>
      </Modal>
    </View>
  );
};
