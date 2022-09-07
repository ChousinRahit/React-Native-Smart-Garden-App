import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { View, Text, Box, StatusBar, Heading, useTheme } from 'native-base';
import { Button } from 'components';
import { Colors, Images } from 'assets';
import React from 'react';

const height = Dimensions.get('window').height;
const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Box backgroundColor="primary.600">
        <ImageBackground
          source={Images.ellipse}
          resizeMode="contain"
          imageStyle={{ marginLeft: -200, marginTop: -400, marginRight: 20 }}>
          <ImageBackground
            source={Images.ellipse}
            resizeMode="contain"
            imageStyle={{ marginTop: 50, marginLeft: -200, marginRight: 20 }}>
            <StatusBar
              backgroundColor={Colors.selection}
              barStyle="light-content"
            />
            <Box style={styles.contentContainer}>
              <Box style={styles.content}>
                <Box style={styles.textContent}>
                  <Heading
                    color="grey.400"
                    mb="4"
                    size="xl"
                    fontFamily="heading">
                    Welcome to Aepod
                  </Heading>
                  <Text color="grey.400" fontFamily="heading">
                    Grow plants easily from your home with our award-winning
                    pods
                  </Text>
                </Box>

                <Button
                  title="Register"
                  //   background="grey.400"
                  colorScheme="white"
                  mb="5"
                  isFocused={{ background: 'red' }}
                  onPress={() => navigation.navigate('Register')}
                />
                <Button
                  type="borderd"
                  color="white.600"
                  title="Login"
                  colorScheme="grey"
                />
              </Box>
            </Box>
          </ImageBackground>
        </ImageBackground>
      </Box>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: colors.primary,
    height: height,
  },
  contentContainer: {
    height: height,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContent: {
    marginBottom: 75,
  },
  content: {
    marginBottom: 50,
  },
});
