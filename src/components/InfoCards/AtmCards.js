import { Colors } from 'assets';
import { Box, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Icon, { Icons } from '../Icons';

const width = Dimensions.get('window').width;
const AtmCards = () => {
  return (
    <VStack>
      <HStack space={2} justifyContent="center">
        <Box style={styles.infoBox} py="3" px="2">
          <Icon
            type={Icons.MaterialCommunityIcons}
            name="weather-windy"
            size={24}
            color={Colors.iconColor}
          />
          <Text fontSize="xs" opacity="0.6" my="2" mt="2">
            Humidity
          </Text>
          <Text bold>10%</Text>
        </Box>
        <Box style={styles.infoBox} py="3" px="2">
          <Icon
            type={Icons.Ionicons}
            name="thermometer-outline"
            size={24}
            color={Colors.iconColor}
          />
          <Text fontSize="xs" opacity="0.6" my="2" mt="2">
            Temperature
          </Text>
          <Text bold>25.3&#8451;</Text>
        </Box>
        <Box style={styles.infoBox} py="3" px="2">
          <Icon
            type={Icons.Ionicons}
            name="water-outline"
            size={24}
            color={Colors.iconColor}
          />
          <Text fontSize="xs" opacity="0.6" my="2" mt="2">
            Water Level
          </Text>
          <Text bold>10%</Text>
        </Box>
      </HStack>
    </VStack>
  );
};

export default AtmCards;

const styles = StyleSheet.create({
  infoBox: {
    width: width / 3 - 20,
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
});
