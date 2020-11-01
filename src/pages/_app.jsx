/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../../theme';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
