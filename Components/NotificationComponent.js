import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';

import PinIcon from '../Icon/icPinActive24.svg';
import UnpinIcon from '../Icon/icPinDisabled24.svg';
import EventBadge from '../Icon/group.svg';
import CommunityBadge from '../Icon/cardNotification.svg';
import {NotificationBadge} from './NotificationBadge';

const Container = styled(TouchableOpacity)`
  height: 94px;
  width: 100%;
  border-bottom-width: 1px;
  border-color: rgb(246, 246, 248);
  padding-left: 16px;
  padding-left: 16px;
  padding-top: 24px;
  flex-direction: row;
  background-color: ${props =>
    props.state ? 'white' : 'rgba(255, 184, 6, 0.05)'};
`;
const TextWrapper = styled(View)`
  margin-left: 12px;
`;
const NotificationText = styled(Text)`
  font-size: 14px;
  color: black;
  font-weight: 400;
`;
const TimeStampText = styled(Text)`
  margin-top: 4px;
  font-size: 12px;
  color: rgb(186, 197, 192);
  font-weight: 400;
`;

export const NotificationComponent = props => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(props.tag);
  return (
    <Container
      state={isChecked}
      onPress={() => {
        setIsChecked(true);
      }}>
      <NotificationBadge tag={props.tag} />

      <TextWrapper>
        <NotificationText>{props.text}</NotificationText>
        <TimeStampText>{props.time}</TimeStampText>
      </TextWrapper>
    </Container>
  );
};
