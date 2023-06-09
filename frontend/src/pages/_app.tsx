import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../../config/theme';
import createEmotionCache from '../../config/createEmotionCache';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '../context/AuthContext';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RecoilRoot>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
}
