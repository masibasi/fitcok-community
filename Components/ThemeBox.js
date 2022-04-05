import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const HashtagBox = styled(View)`
  background-color: ${props =>
    props.popular ? 'rgb(255,184,6)' : 'rgb(246,246,248)'};
  width: 35px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  border-radius: 3px;
`;
const HashTag = styled(Text)`
  color: ${props => (props.popular ? 'white' : 'rgb(158,161,168)')};
  font-size: 10px;
  font-weight: bold;
`;

export const ThemeBox = () => {
  return (
    <HashtagBox>
      <HashTag>테마1</HashTag>
    </HashtagBox>
  );
};
