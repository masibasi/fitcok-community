import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNav} from './Navigation/BottomTabNav';
import {ToastProvider} from 'react-native-toast-notifications';
import Toast from 'react-native-toast-notifications';
import styled from 'styled-components';
import {FirstNav} from './Navigation/FirstNav';

const AppCon = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  return (
    <ToastProvider
      duration={1500}
      offsetBottom={50}
      renderToast={toast => (
        <View
          style={{
            width: '91%',
            height: 46,
            marginBottom: 16,
            backgroundColor: 'rgba(24, 25,26, 0.85)',
            borderRadius: 6,
            paddingLeft: 16,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'rgb(255, 255, 255)',
              fontSize: 14,
            }}>
            {toast.message}
          </Text>
        </View>
      )}>
      <Toast ref={ref => (global['toast'] = ref)} />
      <AppCon>
        <NavigationContainer>
          <FirstNav />
        </NavigationContainer>
      </AppCon>
    </ToastProvider>
  );
};

export default App;
