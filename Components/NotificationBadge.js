import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled(TouchableOpacity)`
  height: 20px;
  width: 51px;
  border-radius: 17.5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => {
    console.log('태그2 = ' + props.tag);
    return selectBG(props.tag);
  }};
`;

const TagText = styled(Text)`
  color: white;
  font-size: 10px;
  font-weight: 500;
`;

export const NotificationBadge = props => {
  console.log('태그 = ' + props.tag);
  return (
    <Container tag={props.tag}>
      <TagText>{props.tag}</TagText>
    </Container>
  );
};

const selectBG = tag => {
  if (tag == '피트니스') return 'rgb(255, 184, 6)';
  else if (tag == '이벤트') return 'rgb(125, 216, 66)';
  else if (tag == '커뮤니티') return 'rgb(92, 183, 245)';
  else if (tag == '공지') return 'rgb(0, 0, 0)';
  else if (tag == '커머스') return 'rgb(253, 102, 108)';
  else return 'rgb(255, 184, 6)';
};
