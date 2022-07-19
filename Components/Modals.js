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
  letter-spacing: -0.2px;
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
  letter-spacing: -0.2px;
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
  letter-spacing: -0.2px;
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
  const ToggleDeletePostButton = () => {
    props.setModalVisible(!props.isModalVisible);
    setModalVisible(!isModalVisible);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <DeletePostPopup
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <Button title="Post Writer : on" onPress={WriterToggleHandler} />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <TopHalfMenu onPress={ToggleDeletePostButton}>
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
  const ToggleDeleteCommentButton = () => {
    props.setModalVisible(!props.isModalVisible);
    setModalVisible(!isModalVisible);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Button title="Comment Writer : on" onPress={WriterToggleHandler} />
      <DeleteCommentPopup
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <TopHalfMenu onPress={ToggleDeleteCommentButton}>
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
  const ToggleDeleteCommentButton = () => {
    props.setModalVisible(!props.isModalVisible);
    setModalVisible(!isModalVisible);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Button title="Comment Writer : off" onPress={WriterToggleHandler} />
      <DeleteCommentPopup
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <OneMenu onPress={ToggleDeleteCommentButton}>
            <RedText>댓글 신고하기</RedText>
          </OneMenu>
          <CloseBtn onPress={toggleModal}>
            <CLoseText>닫기</CLoseText>
          </CloseBtn>
        </Container>
      </Modal>
    </View>
  );
};

const RedDeleteText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(239, 44, 95);
  letter-spacing: -0.2px;
`;
const GrayCloseText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(132, 133, 137);
  letter-spacing: -0.2px;
`;
const BlackMainText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(24, 25, 26);
  letter-spacing: -0.2px;
`;

const UpperView = styled(TouchableOpacity)`
  width: 295px;
  height: 54px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-radius: 2px;
  border-color: rgb(246,246,248)
  background-color: rgb(255, 255, 255);
`;
const BottomViewWrapper = styled(View)`
  flex-direction: row;
  margin-bottom: 351px;
`;
const BottomLeftView = styled(TouchableOpacity)`
  width: 147.5px;
  height: 54px;
  border-bottom-left-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  background-color: rgb(255, 255, 255);
`;
const BottomRightView = styled(TouchableOpacity)`
  width: 147.5px;
  height: 54px;
  border-bottom-right-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  background-color: rgb(255, 255, 255);
`;
export const DeletePostPopup = props => {
  return (
    <View>
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <UpperView>
            <BlackMainText>게시글을 삭제 하시겠어요?</BlackMainText>
          </UpperView>
          <BottomViewWrapper>
            <BottomLeftView
              onPress={() => {
                props.setModalVisible(!props.isModalVisible);
              }}>
              <GrayCloseText>취소</GrayCloseText>
            </BottomLeftView>
            <BottomRightView>
              <RedDeleteText>삭제</RedDeleteText>
            </BottomRightView>
          </BottomViewWrapper>
        </Container>
      </Modal>
    </View>
  );
};

export const DeleteCommentPopup = props => {
  return (
    <View>
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <UpperView>
            <BlackMainText>댓글을 삭제 하시겠어요?</BlackMainText>
          </UpperView>
          <BottomViewWrapper>
            <BottomLeftView
              onPress={() => {
                props.setModalVisible(!props.isModalVisible);
              }}>
              <GrayCloseText>취소</GrayCloseText>
            </BottomLeftView>
            <BottomRightView>
              <RedDeleteText>삭제</RedDeleteText>
            </BottomRightView>
          </BottomViewWrapper>
        </Container>
      </Modal>
    </View>
  );
};
