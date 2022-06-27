import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import styled from 'styled-components';
import {FirstNav} from './Navigation/FirstNav';
import {ToastServiceProvider} from './Services/Toast/toast.provider';

const AppCon = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  return (
    <ToastServiceProvider>
      <AppCon>
        <NavigationContainer>
          <FirstNav />
        </NavigationContainer>
      </AppCon>
    </ToastServiceProvider>
  );
};

export default App;
