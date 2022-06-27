import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';

import PinIcon from '../Icon/icPinActive24.svg';
import UnpinIcon from '../Icon/icPinDisabled24.svg';
import XBtnIcon from '../Icon/icCloseBk24.svg';
import {CategoryContext} from '../Services/Categories/categories.context';
import {catMock} from '../Services/Categories/categoryListMock';
import {check} from 'prettier';

const Container = styled(View)`
  height: 56px;
  width: 100%;
  border-bottom-width: 1px;
  border-color: rgb(246, 246, 248);
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const CategoryText = styled(Text)`
  font-size: 16px;
  color: rgb(24, 25, 26);
`;
const PinWrapper = styled(TouchableOpacity)`
  padding: 2px;
`;
export const CategoryComponent = props => {
  const [isPinned, setIsPinned] = useState(false);
  const {categories, setCategories} = useContext(CategoryContext);

  let catTemp = categories;

  useEffect(() => {
    setIsPinned(props.item.isPinned);
  }, []);
  // 핀을 누르면 json data의 isPinned 값을 변경후 데이터의 순서를 재배열 해준다
  useEffect(() => {
    console.log(props.item.category + "'s state : ", isPinned);
    setDataState();
  }, [isPinned]);

  //카테고리 체크상태를 반영해서 카테고리 정보를 업데이트한다
  const setDataState = () => {
    for (let i = 0; i < catTemp.length; i++) {
      if (catTemp[i].id === props.item.id) {
        catTemp[i].isPinned = isPinned;
      }
    }
    catTemp = getSortData(catTemp);
    console.log(catTemp);
    setCategories(catTemp);
  };

  //데이터의 순서를 바꿔주는 함수
  const getSortData = data => {
    // console.log(data);
    const checkedData = data.filter(item => item.isPinned == true);
    // console.log('Checked list : ' + JSON.stringify(checkedData));

    const uncheckedData = data.filter(item => item.isPinned != true);
    // console.log('Unchecked list : ' + JSON.stringify(uncheckedData));
    const sortedData = checkedData.concat(uncheckedData);
    // console.log('Sorted list : ' + JSON.stringify(sortedData));
    return sortedData;
  };

  return (
    <Container>
      <CategoryText>{props.item.category}</CategoryText>
      <PinWrapper
        onPress={() => {
          setIsPinned(!isPinned);
        }}>
        {isPinned ? <PinIcon /> : <UnpinIcon />}
      </PinWrapper>
    </Container>
  );
};
