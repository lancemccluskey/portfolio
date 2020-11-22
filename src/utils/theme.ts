import { roboto } from '@theme-ui/presets';
import { Theme } from 'theme-ui';

export const theme: Theme = {
  ...roboto,
  containers: {
    nav: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'space-around',
      height: '100%',
      // maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    header: {
      height: '10vh',
      width: '100vw',
      mt: 2,
      bg: 'background',
      borderBottom: '1px solid',
      borderColor: 'background',
    },
    a: {
      color: 'text',
      fontSize: 3,
      cursor: 'pointer',
    },
    aHome: {
      fontWeight: 'bold',
      fontSize: 4,
      cursor: 'pointer',
    },
  },
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
