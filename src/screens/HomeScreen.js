import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { MainHeading, ImageCarousel } from 'components';
import { ScrollView, StatusBar, View } from 'native-base';
import { Colors, Images } from 'assets';
import { InfoCards } from 'components';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.primaryBackground}
        barStyle="dark-content"
      />
      <MainHeading />
      <ImageCarousel data={[Images.garOne, Images.garTwo, Images.garThree]} />
      <InfoCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },
});
