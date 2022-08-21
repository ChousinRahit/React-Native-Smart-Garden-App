import { Images } from 'assets';
import { Heading, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

const index = () => {
  return (
    <View style={styles.constainer}>
      <Heading style={styles.heading}>Hello, Isaac 🌿</Heading>
      <Images.SettingsIcon />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  constainer: {
    paddingHorizontal: 20,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 26,
  },
});
