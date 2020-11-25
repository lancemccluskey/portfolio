import { roboto } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

export const theme: Theme = {
  ...roboto,
  colors: {
    primary: '#434BE7',
    secondary: '#E5E5E5',
    background: '#232324',
    text: '#E5E5E5'
  },
  buttons: {
    primary: {
      width: '64px',
      backgroundColor: 'red'
    },
  },
  styles: {
    ...roboto.styles,
  },
};
