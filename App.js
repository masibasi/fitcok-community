import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNav} from './Navigation/BottomTabNav';

import styled from 'styled-components';

const AppCon = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  return (
    <AppCon>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </AppCon>
  );
};

export default App;
