import React, {useEffect, useState, useContext} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import styled from 'styled-components/native';

import {TopTab} from '../Components/TopTab_SimpleTitle';
import {CategoryComponent} from '../Components/CategoryComponent';
import {CategoryContext} from '../Services/Categories/categories.context';
import {catMock} from '../Services/Categories/categoryListMock';

const ContentWrapper = styled(View)`
  flex: 1;
`;
const TopContainer = styled(View)`
  height: 138px;
  background-color: white;
  padding-top: 40px;
  padding-left: 16px;
  margin-bottom: 8px;
`;
const TitleText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(24, 25, 26);
  margin-bottom: 16px;
`;
const OrderWrapper = styled(View)`
  flex-direction: row;
`;
const OrderBtn = styled(TouchableOpacity)`
  padding: 0px;
  width: 81px;
  height: 36px;
  border-radius: 22px;
  border-width: 1px;
  border-color: ${props => (props.isclicked ? 'black' : 'rgb(229,230,232)')};
  margin-right: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isclicked ? 'black' : 'white')};
`;
const OrderBtnText = styled(Text)`
  color: ${props => (props.isclicked ? 'white' : 'rgb(132,133,137)')};
  font-size: 12px;
`;
const BottomContainer = styled(View)`
  flex: 1
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
`;
const CategoryText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(24, 25, 26);
  margin-top: 24px;
  margin-bottom: 16px;
`;

const CatList = styled(FlatList)``;

export const CategorySettingsScreen = ({navigation}) => {
  const [orderNew, setOrderNew] = useState(true);
  const [orderPop, setOrderPop] = useState(false);
  const {categories, setCategories} = useContext(CategoryContext);
  //데이터의 순서를 바꿔주는 함수
  const getSortData = data => {
    const checkedData = data.filter(item => item.checked === true);
    const uncheckedData = data.filter(item => item.checked !== true);
    const sortedData = checkedData.concat(uncheckedData);
    return sortedData;
  };

  //데이터가 바뀌면 리스트의 순서를 바꿔준다.
  // useEffect(() => {
  //   setData(getSortData());
  //   console.log('data change');
  // }, categories); // 현재 데이터가 안바뀌는 문제가 있음

  return (
    <ContentWrapper>
      <TopTab title="카테고리 설정" navigation={navigation} />
      <TopContainer>
        <TitleText>정렬기준</TitleText>
        <OrderWrapper>
          <OrderBtn
            isclicked={orderNew}
            onPress={() => {
              setOrderNew(true);
              setOrderPop(false);
            }}>
            <OrderBtnText isclicked={orderNew}>최신순</OrderBtnText>
          </OrderBtn>
          <OrderBtn
            isclicked={orderPop}
            onPress={() => {
              setOrderNew(false);
              setOrderPop(true);
            }}>
            <OrderBtnText isclicked={orderPop}>인기순</OrderBtnText>
          </OrderBtn>
        </OrderWrapper>
      </TopContainer>
      <BottomContainer>
        <CategoryText>카테고리</CategoryText>
        <CatList
          data={categories}
          renderItem={({item}) => {
            return <CategoryComponent item={item} catData={categories} />;
          }}
          keyExtractor={item => item.id}
          ListFooterComponent={
            <View
              style={{
                height: 80,
                width: '100%',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
          }
        />
      </BottomContainer>
    </ContentWrapper>
  );
};
