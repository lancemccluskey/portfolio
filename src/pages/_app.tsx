/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from 'utils/theme';
import { Navigation } from 'components/Navigation';

// import 'beautiful-react-diagrams/styles.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon-logo.png" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
