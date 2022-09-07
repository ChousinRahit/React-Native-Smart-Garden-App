import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    'Playfair Display': {
      400: {
        normal: 'PlayfairDisplay-Regular',
      },
      500: {
        normal: 'PlayfairDisplay-Medium',
      },
      600: {
        normal: 'PlayfairDisplay-SemiBold',
      },
      700: {
        normal: 'PlayfairDisplay-Bold',
      },
    },

    'Cormorant Garamond': {
      400: {
        normal: 'CormorantGaramond-Regular',
      },
      500: {
        normal: 'CormorantGaramond-Medium',
      },
      600: {
        normal: 'CormorantGaramond-SemiBold',
      },
      700: {
        normal: 'CormorantGaramond-Bold',
      },
    },
  },
  fonts: {
    // heading: 'Playfair Display',
    heading: 'Cormorant Garamond',
  },
  colors: {
    // Add new color
    white: {
      600: '#ffffff',
      800: '#f2f2f2',
    },
    primary: {
      50: '#ddfff2',
      100: '#b3fadc',
      200: '#87f5c7',
      300: '#5af2b0',
      400: '#30ee9b',
      500: '#19d481',
      600: '#0da564',
      700: '#047646',
      800: '#00482a',
      900: '#001a0a',
    },
    grey: {
      400: '#ffffff',
      600: '#ffffff00',
      800: '#d9d9d933',
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    //   initialColorMode: 'dark',
  },
});

export default theme;
