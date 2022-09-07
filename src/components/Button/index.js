import { StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';
import { Button, Text } from 'native-base';
import { Colors } from 'assets';

const width = Dimensions.get('window').width;

const ButtonComp = ({
  type,
  title,
  onPress = () => console.log('Clicked'),
  color = Colors.selection,
  background,
  ...rest
}) => {
  console.log(onPress);
  return (
    <Button
      {...rest}
      backgroundColor={background}
      onPress={onPress}
      style={[styles.button, type === 'borderd' && styles.bordered]}>
      <Text bold color={color}>
        {title}
      </Text>
    </Button>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    width: width * 0.8,
    height: 48,
    borderRadius: 10,
  },
  bordered: {
    borderWidth: 2,
    borderColor: Colors.white,
  },
});
