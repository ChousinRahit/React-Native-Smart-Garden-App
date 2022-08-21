import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { MainHeading } from 'components';
import { TabNav } from 'navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
