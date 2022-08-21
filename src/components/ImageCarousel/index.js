import { Heading, Image, Pressable, Text } from 'native-base';
import React, { useRef, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import { Colors } from 'assets';
import Icon, { Icons } from '../Icons';
import CustomPaging from './CustomPaging';

const width = Dimensions.get('window').width;

function CarouselItem({ item, index }, parallaxProps) {
  console.log(item);
  return (
    <Pressable onPress={() => alert('Image description:' + item.description)}>
      <SafeAreaView style={styles.itemContainer}>
        <View style={styles.item}>
          <ParallaxImage
            source={{ uri: item.source }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            {...parallaxProps}
          />
          {/* <Text style={styles.title} numberOfLines={2}>
  {item.title}
  </Text>*/}
          <View style={styles.garDescription}>
            <View>
              <Heading size="md">{item.title}</Heading>
              <Text py="1" px="1" opacity="0.5">
                ID : 123456789
              </Text>
            </View>
            <View>
              <Icon
                type={Icons.MaterialIcons}
                size={18}
                name="arrow-forward-ios"
                color={Colors.selection}
                style={{
                  backgroundColor: Colors.primaryBackground,
                  padding: 5,
                  borderRadius: 50,
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}
const ImageCarousel = () => {
  const data = [
    {
      title: 'Charlie’s Garden',
      description: 'Location: Red Sea',
      source:
        'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    },
    {
      title: 'Phone',
      description: 'iPhone 6 on the table',
      source:
        'https://images.unsplash.com/photo-1514192497895-875274f82835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Old building',
      description: 'Location: Germany',
      source:
        'https://images.unsplash.com/photo-1449675820498-79947c07ede6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    onSnapToItem: index => setSlideIndex(index),
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 50,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
    enableSnap: true,
    loop: true,
    swipeThreshold: 0,
    loopClonesPerSide: 3,
  };
  return (
    <View>
      <Carousel ref={carouselRef} {...settings} />
      <CustomPaging data={data} activeSlide={slideIndex} />
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
  },
  itemContainer: {
    width: width - 50,
    height: 240,
  },
  item: {
    height: 180,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    // marginBottom: Platform.select({ ios: 0, android: 1 }),
  },
  image: {
    // resizeMode: 'cover',
  },
  dotContainer: {
    backgroundColor: 'rgb(230,0,0)',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: 'rgb(255,230,230)',
  },
  garDescription: {
    position: 'absolute',
    bottom: -30,
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: width * 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: [{ translateX: (width - 50) / 2 - (width * 0.75) / 2 }],
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
