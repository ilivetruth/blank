// theme.js
import { MD3LightTheme as LightTheme, MD3DarkTheme as DarkTheme } from 'react-native-paper';

const LightCustomTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    primary: '#6200ea',
    accent: '#03dac4',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
  },
};

const DarkCustomTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc',
    accent: '#03dac6',
    background: '#121212',
    surface: '#333333',
    text: '#ffffff',
  },
};

export { LightCustomTheme, DarkCustomTheme };
