import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import styled from 'styled-components';

import XIcon from '../Icon/icCloseBk24Copy.svg';
import RightArrowIcon from '../Icon/icChevronRightGr16.svg';
import ImageIcon from '../Icon/icImageBk24.svg';
import VideoIcon from '../Icon/icVideoBk24.svg';
import IsCheckedIcon from '../Icon/icCheckSquareBk18.svg';
import NotCheckedIcon from '../Icon/icCheckSquareGr18.svg';
import CloseBoxIcon from '../Icon/icCloseGr16.svg';
import {SelectCategoryModal} from '../Components/Modals';

const Container = styled(View)`
  background-color: white;
  flex: 1;
  justify-content: space-between;
`;
const TopTab = styled(View)`
background-color: white
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 25px;
  padding-bottom: 9px;
  justify-content: space-between;
`;
const TitleText = styled(Text)`
  color: black;
  font-size: 14px;
  font-weight: 700;
`;
const SubmitButton = styled(TouchableOpacity)`
  height: 32px;
  width: 54px;
  background-color: rgb(24, 25, 26);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
const SubmitText = styled(Text)`
  font-size: 12px;
  color: white;
`;
const MainWrapper = styled(View)`
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
`;
const SelectCategory = styled(TouchableOpacity)`
  flex-direction: row
  margin-top: 20px;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  border: 1px;
  border-color: rgb(229, 230, 232);
`;
const SelectCategoryText = styled(Text)`
  font-size: 14px;
  color: rgb(70, 71, 72);
  font-weight: 500;
`;

const EnterTitleTextInput = styled(TextInput).attrs({
  placeholder: '제목을 입력해주세요',
  placeholderTextColor: 'rgb(186, 187, 192)',
})`
  margin-top: 20px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-color: rgb(229, 230, 232);
  font-size: 16px;
  color: rgb(24, 25, 26);
`;
const EnterContentTextInput = styled(TextInput).attrs({
  placeholder: '내용을 입력해주세요',
  placeholderTextColor: 'rgb(186, 187, 192)',
  multiline: true,
})`
  margin-top: 12px;
  font-size: 16px;
  color: rgb(70, 71, 72);
  padding-top: 0;
`;

const ReadRulesNotification = styled(View)`
  height: 110px;
  background-color: rgb(246, 246, 248);
  margin-bottom: 24px;
  padding: 12px;
`;
const RulesTitleText = styled(Text)`
  font-size: 12px;
  color: rgb(70, 71, 72);
  font-weight 500;
  margin-bottom: 6px;
`;
const TitleWrapper = styled(View)`
justify-content: space-between
width:100%;
flex-direction: row;`;
const CloseBoxWrapper = styled(TouchableOpacity)``;
const RulesText = styled(Text)`
  font-size: 12px;
  color: rgb(70, 71, 72);
  font-weight 400;
  line-height: 18px
`;
const RulesMoreWrapper = styled(TouchableOpacity)``;
const RulesMoreText = styled(Text)`
  font-size: 12px;
  color: rgb(70, 71, 72);
  font-weight 400;
  line-height: 18px
  text-decoration: underline
  margin-top: 6px;
`;
const FlexHelper = styled(View)`
  justify-content: space-between;
  flex: 1;
`;
const BottomTab = styled(View)`
  height: 60px;
  border-top-width: 1px;
  border-color: rgb(229, 230, 232);
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
`;
const InsertWrapper = styled(View)`
  flex-direction: row;
`;
const BottomTabItemWrapper = styled(TouchableOpacity)`
  flex-direction: row;
`;
const ImageText = styled(Text)`
  margin-left: 6px;
  color: rgb(70, 71, 72);
  margin-right: 24px;
`;
const VideoText = styled(Text)`
  margin-left: 6px;
  color: rgb(70, 71, 72);
`;
const CheckWrapper = styled(View)`
  flex-direction: row;
`;
const FreeText = styled(Text)`
  color: rgb(70, 71, 72);
  margin-left: 2px;
  margin-right: 16px;
`;
const QuestionText = styled(Text)`
  color: rgb(186, 187, 192);
  margin-left: 2px;
  margin-right: 16px;
`;
const CertifiedText = styled(Text)`
  color: rgb(186, 187, 192);
  margin-left: 2px;
`;

export const WritePostScreen = ({navigation}) => {
  const [isRulesOpen, setIsRulesOpen] = useState(true);
  const [selectModalShow, setIsSelectCatModalShow] = useState(false);

  return (
    <>
      <SelectCategoryModal
        isModalVisible={selectModalShow}
        setModalVisible={setIsSelectCatModalShow}
      />

      <TopTab>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <XIcon />
        </TouchableOpacity>
        <TitleText>글쓰기</TitleText>
        <SubmitButton>
          <SubmitText>등록</SubmitText>
        </SubmitButton>
      </TopTab>
      <Container>
        <MainWrapper>
          <SelectCategory
            onPress={() => {
              setIsSelectCatModalShow(true);
            }}>
            <SelectCategoryText>카테고리를 선택해주세요</SelectCategoryText>
            <RightArrowIcon />
          </SelectCategory>
          <EnterTitleTextInput></EnterTitleTextInput>
          <FlexHelper>
            <EnterContentTextInput></EnterContentTextInput>
            {isRulesOpen ? (
              <ReadRulesNotification>
                <TitleWrapper>
                  <RulesTitleText>이용규칙을 읽어보세요</RulesTitleText>
                  <CloseBoxWrapper
                    onPress={() => {
                      setIsRulesOpen(!isRulesOpen);
                    }}>
                    <CloseBoxIcon />
                  </CloseBoxWrapper>
                </TitleWrapper>

                <RulesText>
                  이용규칙에 관련된 안내내용이 들어갑니다. 이용규칙에 관련된{' '}
                  {'\n'}안내용이 들어갑니다. 이용규칙에 관련된 안내내용
                </RulesText>
                <RulesMoreWrapper>
                  <RulesMoreText>이용규칙 전체보기</RulesMoreText>
                </RulesMoreWrapper>
              </ReadRulesNotification>
            ) : null}
          </FlexHelper>
        </MainWrapper>
        <BottomTab>
          <InsertWrapper>
            <BottomTabItemWrapper>
              <ImageIcon />
              <ImageText>0/10</ImageText>
            </BottomTabItemWrapper>
            <BottomTabItemWrapper>
              <VideoIcon />
              <VideoText>0/10</VideoText>
            </BottomTabItemWrapper>
          </InsertWrapper>
          <CheckWrapper>
            <BottomTabItemWrapper>
              <IsCheckedIcon />
              <FreeText>자유</FreeText>
            </BottomTabItemWrapper>
            <BottomTabItemWrapper>
              <NotCheckedIcon />
              <QuestionText>질문</QuestionText>
            </BottomTabItemWrapper>
            <BottomTabItemWrapper>
              <NotCheckedIcon />
              <CertifiedText>인증</CertifiedText>
            </BottomTabItemWrapper>
          </CheckWrapper>
        </BottomTab>
      </Container>
    </>
  );
};
