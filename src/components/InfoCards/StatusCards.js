import { Colors } from 'assets';
import { Box, Flex, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Icon, { Icons } from '../Icons';

const width = Dimensions.get('window').width;
const AtmCards = () => {
  return (
    <VStack space={2}>
      <HStack space={2} justifyContent="center">
        <Box style={[styles.infoBox, styles.infoSmall]} py="3" px="2">
          <Icon
            type={Icons.MaterialCommunityIcons}
            name="wifi-strength-outline"
            size={24}
            color={Colors.iconColor}
          />
          <Text fontSize="xs" opacity="0.6" my="2" mt="2">
            Connectivity
          </Text>
          <Text bold>Online</Text>
        </Box>
        <Box py="1" px="2" style={[styles.infoBox, styles.infoBoxLarger]}>
          <Text fontSize="xs" opacity="0.6" my="2" mt="2">
            Nutrient Level
          </Text>
          <Flex flexDirection="row">
            <Icon
              type={Icons.MaterialCommunityIcons}
              name="scale"
              size={24}
              color={Colors.iconColor}
            />
            <Text bold ml="3">
              5 grams Left
            </Text>
          </Flex>
          <Flex flexDirection="row" py="1">
            <Icon
              type={Icons.Ionicons}
              name="leaf-outline"
              size={24}
              color={Colors.iconColor}
            />
            <Text bold ml="3">
              Refill in 2 days
            </Text>
          </Flex>
        </Box>
      </HStack>
      <HStack space={2} justifyContent="center">
        <Box py="1" px="2" style={[styles.infoBox, styles.infoBoxLarger]}>
          <Text fontSize="xs" opacity="0.6" my="2" mt="2">
            Status
          </Text>
          <Flex flexDirection="row">
            <Icon
              type={Icons.MaterialCommunityIcons}
              name="leaf-circle"
              size={24}
              color={Colors.iconColor}
            />
            <Text bold ml="3">
              5 grams Left
            </Text>
          </Flex>
          <Flex flexDirection="row" py="1">
            <Icon
              type={Icons.MaterialCommunityIcons}
              name="timelapse"
              size={24}
              color={Colors.iconColor}
            />
            <Text bold ml="3">
              Next harvest in 3 days
            </Text>
          </Flex>
        </Box>
        <Box style={[styles.infoBox, styles.infoSmall]} py="3" px="2">
          <Icon
            type={Icons.MaterialCommunityIcons}
            name="lightbulb-variant-outline"
            size={24}
            color={Colors.iconColor}
          />
          <Text fontSize="xs" opacity="0.6" my="2" mt="2">
            Light Status
          </Text>
          <Text bold>On</Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default AtmCards;

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    shadowColor: Colors.selection,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  infoSmall: {
    width: width / 3 - 20,
  },
  infoBoxLarger: {
    width: (width / 3 - 15) * 2,
  },
});
