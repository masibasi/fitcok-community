import React, {useState, useContext, useEffect} from 'react';
import {Image} from 'react-native';
import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import styled from 'styled-components';
import Modal from 'react-native-modal';

import CloseIcon from '../Icon/icCloseBk24';
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
  const ReportClickHandler = () => {
    toggleModal();
    setIsReportModalVisible(!isReportModalVisible);
  };
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  return (
    <View>
      <Button title="Post Writer : off" onPress={WriterToggleHandler} />
      <ReportPopup
        isModalVisible={isReportModalVisible}
        setModalVisible={setIsReportModalVisible}
      />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <TopHalfMenu onPress={ReportClickHandler}>
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
      {/* <Button title="Comment Writer : on" onPress={WriterToggleHandler} /> */}
      <DeleteCommentPopup
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        setIsDeleted={props.setIsDeleted}
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
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    props.setModalVisible(!props.isModalVisible);
  };
  const WriterToggleHandler = () => {
    props.setIsWriter(!props.isWriter);
  };
  const ReportClickHandler = () => {
    props.setModalVisible(!props.isModalVisible);
    setIsReportModalVisible(true);
  };

  return (
    <View>
      <Button title="Comment Writer : off" onPress={WriterToggleHandler} />
      <DeleteCommentPopup
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
      <ReportPopup
        isModalVisible={isReportModalVisible}
        setModalVisible={setIsReportModalVisible}
      />
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <OneMenu onPress={ReportClickHandler}>
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
  border-bottom-width: 0.5px;
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
  const DeleteCommentHandler = () => {
    props.setIsDeleted(true);
    ClosePopupHandler();
  };
  const ClosePopupHandler = () => {
    props.setModalVisible(!props.isModalVisible);
  };
  return (
    <View>
      <Modal isVisible={props.isModalVisible}>
        <Container>
          <View style={{flex: 1}} />
          <UpperView>
            <BlackMainText>댓글을 삭제 하시겠어요?</BlackMainText>
          </UpperView>
          <BottomViewWrapper>
            <BottomLeftView onPress={ClosePopupHandler}>
              <GrayCloseText>취소</GrayCloseText>
            </BottomLeftView>
            <BottomRightView onPress={DeleteCommentHandler}>
              <RedDeleteText>삭제</RedDeleteText>
            </BottomRightView>
          </BottomViewWrapper>
        </Container>
      </Modal>
    </View>
  );
};

const ReportContainer = styled(View)`
  width: 100%;
  background-color: white;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding: 16px;
`;
const CloseButton = styled(TouchableOpacity);
const ReportTitle = styled(Text)`
  color: rgb(0, 0, 0);
  line-height: 22px;
  font-size: 18px;
  font-weight: 800;
  margin-top: 17px;
  margin-bottom: 23px;
`;
const TextAreaWrapper = styled(View)`
  width: 100%;
  height: 244px;
  background-color: white;
  border-width: 1px;
  border-radius: 6px;
  border-color: rgb(229, 230, 232);
  justify-content: space-between;
`;

const ReportTextInput = styled(TextInput).attrs({
  placeholder: '허위 신고 시에 이용이 제한될 수 있습니다.',
  placeholderTextColor: 'rgb(186,187,192)',
  maxLength: 2000,
  multiline: true,
})`
  color: rgb(0, 0, 0);
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  padding: 12px;
  margin-bottom: 32px;
`;

const TextLengthText = styled(Text)`
  color: rgb(186, 187, 192);
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  padding: 12px;
  text-align: right;
`;
const ButtonWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;
const CancelButton = styled(TouchableOpacity)`
  flex: 1;
  height: 56px;
  background-color: rgb(229, 230, 232);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;
const CancelText = styled(Text)`
  color: rgb(0, 0, 0);
  line-height: 24px;
  font-size: 16px;
  letter-spacing: -0.4px;
  font-weight: 800;
`;
const ConfirmButton = styled(TouchableOpacity)`
  flex: 1;
  height: 56px;
  background-color: rgb(0, 0, 0);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;
const ConfirmText = styled(Text)`
  color: rgb(255, 255, 255);
  line-height: 24px;
  font-size: 16px;
  letter-spacing: -0.4px;
  font-weight: 800;
`;
export const ReportPopup = props => {
  const ClosePopupHandler = () => {
    props.setModalVisible(!props.isModalVisible);
  };
  const ChangeTextHandler = text => {
    setTextLength(text.length);
  };
  const [textLength, setTextLength] = useState(0);
  return (
    <View>
      <Modal style={{margin: 0}} isVisible={props.isModalVisible}>
        <View style={{flex: 1}} />
        <ReportContainer>
          <View style={{flexDirection: 'row-reverse'}}>
            <CloseIcon onPress={ClosePopupHandler} />
          </View>
          <ReportTitle>신고하기</ReportTitle>
          <TextAreaWrapper>
            <ReportTextInput onChangeText={ChangeTextHandler} />
            <TextLengthText>{textLength} / 2000</TextLengthText>
          </TextAreaWrapper>
          <ButtonWrapper>
            <CancelButton onPress={ClosePopupHandler}>
              <CancelText>취소</CancelText>
            </CancelButton>
            <ConfirmButton>
              <ConfirmText>확인</ConfirmText>
            </ConfirmButton>
          </ButtonWrapper>
        </ReportContainer>
      </Modal>
    </View>
  );
};
