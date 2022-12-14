import { Container } from '@mantine/core';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';
import SuperTokens from 'supertokens-auth-react';
import { redirectToAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

const SuperTokensComponentNoSSR = dynamic(
  new Promise((res) => res(SuperTokens.getRoutingComponent)),
  { ssr: false }
);

export default function Auth() {
  useEffect(() => {
    if (SuperTokens.canHandleRoute() === false) {
      redirectToAuth();
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>SuperTokens 💫</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SuperTokensComponentNoSSR />
    </Container>
  );
}
