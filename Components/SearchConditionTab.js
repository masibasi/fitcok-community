import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';


const Container = styled(View)`
  height: 64px;
  background-color: 'rgb(246,246,248)';
  align-items: center;
  flex-direction: row;
`;

const SettingsButton = styled(TouchableOpacity)`
  margin-left: 16px;
  background-color: black;
  width: 76px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  flex-direction: row;
`;
const SettingsText = styled(Text)`
  color: white;
  font-size: 12px;
  margin-right: 8px;
`;
const DailyButton = styled(TouchableOpacity)`
  margin-left: 16px;
  background-color: white;
  width: 63px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border-width: 1px;
  border-color: 'rgb(229,230,232)';
`;
const DailyText = styled(Text)`
  color: 'rgb(70,71,72)';
  font-size: 12px;
`;
const DietButton = styled(TouchableOpacity)`
  margin-left: 16px;
  background-color: white;
  width: 85px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border-width: 1px;
  border-color: 'rgb(229,230,232)';
`;
const DietText = styled(Text)`
  color: 'rgb(70,71,72)';
  font-size: 12px;
`;
export default SearchConditionTab = () => {
  return (
    <Container>
      <SettingsButton>
        <SettingsText>설정</SettingsText>
      </SettingsButton>
      <DailyButton>
        <DailyText>#일상</DailyText>
      </DailyButton>
      <DietButton>
        <DietText>#다이어트</DietText>
      </DietButton>
    </Container>
  );
};
