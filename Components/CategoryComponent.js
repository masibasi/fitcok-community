import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';

import PinIcon from '../Icon/icPinActive24.svg';
import UnpinIcon from '../Icon/icPinDisabled24.svg';
import XBtnIcon from '../Icon/icCloseBk24.svg';

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

  return (
    <Container>
      <CategoryText>{props.category}</CategoryText>
      <PinWrapper
        onPress={() => {
          setIsPinned(!isPinned);
        }}>
        {isPinned ? <PinIcon /> : <UnpinIcon />}
      </PinWrapper>
    </Container>
  );
};
