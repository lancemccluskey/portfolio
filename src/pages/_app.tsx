/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import type { AppProps } from 'next/app';
import { theme } from 'utils/theme';
import { Navigation } from 'components/Navigation';

import 'beautiful-react-diagrams/styles.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
