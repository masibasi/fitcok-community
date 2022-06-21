import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';

import PinIcon from '../Icon/icPinActive24.svg';
import UnpinIcon from '../Icon/icPinDisabled24.svg';
import XBtnIcon from '../Icon/icCloseBk24.svg';
import {CategoryContext} from '../Services/Categories/categories.context';

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
  const catData = categories;

  const setDataState = () => {
    for (let i = 0; i < catData.length; i++) {
      if (catData[i].id === props.item.id) {
        catData[i].isPinned = isPinned;
      }
    }
  };

  // 핀을 누르면 json data의 isPinned 값을 변경해준다
  useEffect(() => {
    console.log('the state has changed', isPinned);
    setDataState();
    console.log(JSON.stringify(catData));
    setCategories(catData);
  }, [isPinned]);

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
