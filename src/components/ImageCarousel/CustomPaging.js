import React from 'react';
import { StyleSheet } from 'react-native';
import { Pagination } from 'react-native-snap-carousel';
import { Colors } from 'assets';
import { View } from 'native-base';

export default function CustomPaging({ data, activeSlide }) {
  const settings = {
    dotsLength: data.length,
    activeDotIndex: activeSlide,
    containerStyle: styles.dotContainer,
    dotStyle: styles.dotStyle,
    inactiveDotStyle: styles.inactiveDotStyle,
    inactiveDotOpacity: 0.4,
    inactiveDotScale: 0.6,
  };
  return (
    <View style={styles.pagination}>
      <Pagination {...settings} />
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    marginTop: -30,
  },
  dotStyle: {
    width: 15,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.selection,
  },
  inactiveDotStyle: {
    backgroundColor: Colors.selection,
  },
});
