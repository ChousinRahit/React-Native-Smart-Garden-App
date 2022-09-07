import { NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { TabNav, AuthNavigator } from 'navigation';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/theme';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {isLoggedIn ? <TabNav /> : <AuthNavigator />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
