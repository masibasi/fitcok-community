import React from 'react';
import {View, Text} from 'react-native';

import {ToastProvider} from 'react-native-toast-notifications';
import Toast from 'react-native-toast-notifications';

export const ToastServiceProvider = ({children}) => {
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
      {children}
    </ToastProvider>
  );
};
