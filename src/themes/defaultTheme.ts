import { extendTheme } from '@chakra-ui/react';

const colors = {
  default: {
    900: '#495057',
    1000: '#353A40',
  },
  text: {
    50: '#f4f6f7',
    100: '#e3e7ea',
    200: '#cad2d7',
    300: '#a5b2bb',
    400: '#798b97',
    500: '#5e707c',
    600: '#505e6a',
    700: '#454f59',
    800: '#3e454c',
    900: '#353a40',
  },
  header: {
    900: '#353A40',
  },
  subtitle: {
    900: '#666F86',
  },
  caption: {
    900: '#ADB5BD',
  },
  active: {
    900: '#00B900',
  },
  line: {
    50: '#f3fcf3',
    100: '#daf5da',
    200: '#bdedbd',
    300: '#9de49d',
    400: '#77d977',
    500: '#47cc47',
    600: '#04ba04',
    700: '#02a002',
    800: '#017e01',
    900: '#014b01',
  },
  buttonDefault: {
    50: '#f9f9fa',
    100: '#f9f9fa',
    200: '#eceef0',
    300: '#eceef0',
    400: '#dee1e5',
    500: '#dee1e5',
    600: '#ced3d9',
    700: '#ced3d9',
    800: '#c0c4ca',
    900: '#afb3b8',
  },
  buttonRed: {
    50: '#ffe5e5',
    100: '#fbbaba',
    200: '#f28e8e',
    300: '#eb6161',
    400: '#e43635',
    500: '#ca1c1b',
    600: '#9e1414',
    700: '#710d0e',
    800: '#460506',
    900: '#1e0000',
  },
  sideBar: {
    900: '#F8F9FA',
  },
  tableBg: {
    900: '#EDEFF0',
  },
  lineChatBg: {
    900: '#8CABD9',
  },
  lineButtonText: {
    600: '#42659a',
  },
  appointmentStatusCanceled: {
    50: '#fcf6ee',
    100: '#f7e7ce',
    200: '#eecc99',
    300: '#e6ad63',
    400: '#e0923f',
    500: '#d77329',
    600: '#c05621',
    700: '#9e3c1f',
    800: '#81301f',
    900: '#6b291c',
  },
  appointmentStatusBooked: {
    50: '#f3f6fc',
    100: '#e6eef8',
    200: '#c7dbf0',
    300: '#95bce4',
    400: '#5d9bd3',
    500: '#387ebf',
    600: '#2b6cb0',
    700: '#214f83',
    800: '#1f456d',
    900: '#1f3b5b',
  },
  appointmentStatusDone: {
    50: '#f6f7f9',
    100: '#eceef2',
    200: '#d6dae1',
    300: '#b1bac8',
    400: '#8795a9',
    500: '#68788f',
    600: '#536076',
    700: '#4a5568',
    800: '#3b4351',
    900: '#343a46',
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Default Font', Roboto`,
    body: `'Default Font', Roboto`,
  },
  colors,
  components: {
    Heading: {
      baseStyle: {
        color: colors.text['900'],
      },
    },
    Text: {
      baseStyle: {
        color: colors.text['700'],
      },
      variants: {
        secondary: {
          color: colors.text['500'],
          header: {
            color: colors.header,
          },
          subtitle: {
            color: colors.subtitle,
          },
          caption: {
            color: colors.caption,
          },
          active: {
            color: colors.active,
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'Roboto',
      },
    },
  },
});

export default theme;
