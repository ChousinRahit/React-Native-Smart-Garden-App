import { StyleSheet, Text } from 'react-native';
import React from 'react';
import AtmCards from './AtmCards';
import StatusCards from './StatusCards';
import { View } from 'native-base';

const index = () => {
  return (
    <>
      <AtmCards />
      <View mb="2"></View>
      <StatusCards />
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
