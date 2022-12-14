import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { getCookie, setCookie } from 'cookies-next';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';
import Session from 'supertokens-auth-react/recipe/session';
import { redirectToAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import * as SuperTokensConfig from '../config/frontendConfig';
import '../styles/globals.css';

if (typeof window !== 'undefined') {
  SuperTokensReact.init(SuperTokensConfig.frontendConfig());
}

function CustomApp(props) {
  const { Component, pageProps } = props;
  const [queryClient] = useState(() => new QueryClient());
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme || 'light');
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30
    });
  };

  useEffect(() => {
    async function doRefresh() {
      if (pageProps?.fromSupertokens === 'needs-refresh') {
        if (await Session.attemptRefreshingSession()) {
          location.reload();
        } else {
          // user has been logged out
          redirectToAuth();
        }
      }
    }
    doRefresh();
  }, [pageProps?.fromSupertokens]);
  if (pageProps?.fromSupertokens === 'needs-refresh') {
    return null;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <Head>
            <title>Widl&#246;cher&apos;s</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                colorScheme: colorScheme,
                primaryColor: 'gray'
              }}
            >
              <SuperTokensWrapper>
                <Component {...pageProps} />
                {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
              </SuperTokensWrapper>
            </MantineProvider>
          </ColorSchemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

CustomApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie('color-scheme', ctx) || 'light'
});

export default CustomApp;
