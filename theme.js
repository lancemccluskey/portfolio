import { roboto } from '@theme-ui/presets';

const theme = {
  ...roboto,
  containers: {
    hooksMain: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      filter: 'url("#goo")',
      overflow: 'hidden',
      svg: {
        display: 'none',
      },
      div: {
        position: 'absolute',
        willChange: 'transform',
        borderRadius: '50%',
        background: 'lightcoral',
        boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
        opacity: '0.6',
      },
      'div:nth-of-type(1)': {
        width: '120px',
        height: '120px',
      },
      'div:nth-of-type(2)': {
        width: '250px',
        height: '250px',
      },
      'div:nth-of-type(3)': {
        width: '150px',
        height: '150px',
      },
      'div::after': {
        content: '""',
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.8)',
      },
      'div:nth-of-type(2)::after': {
        top: '70px',
        left: '70px',
        width: '70px',
        height: '70px',
      },
      'div:nth-of-type(3)::after': {
        top: '50px',
        left: '50px',
        width: '50px',
        height: '50px',
      },
    },
  },
  styles: {
    ...roboto.styles,
  },
};

export default theme;
