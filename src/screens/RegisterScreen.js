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
const width = Dimensions.get('window').width;
const RegisterScreen = ({ navigation }) => {
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
                    Register on Aepod
                  </Heading>
                  <Text color="grey.400" fontFamily="heading">
                    Create an Aepod account, We can’t wait to have you.
                  </Text>
                </Box>

                <Button
                  title="Register"
                  //   background="grey.400"
                  colorScheme="white"
                  mb="5"
                  isFocused={{ background: 'red' }}
                />
                <Heading
                  size="sm"
                  color="grey.400"
                  textAlign="center"
                  fontFamily="heading"
                  onPress={() => navigation.navigate('Login')}
                  fontWeight="bold">
                  Already have an account? Login
                </Heading>
              </Box>
            </Box>
          </ImageBackground>
        </ImageBackground>
      </Box>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: colors.primary,
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: height,
  },
  contentContainer: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContent: {
    marginBottom: 75,
  },
  content: {
    marginBottom: 50,
    alignItems: 'center',
  },
});
