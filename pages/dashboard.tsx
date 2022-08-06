import { Container, Title } from '@mantine/core';
import Head from 'next/head';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import ThirdPartyEmailPassword, {
  ThirdPartyEmailPasswordAuth
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import supertokensNode from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import WShell from '../components/Layout/Layout';
import { backendConfig } from '../config/backendConfig';

export async function getServerSideProps(context) {
  // this runs on the backend, so we must call init on supertokens-node SDK
  supertokensNode.init(backendConfig());
  let session;
  try {
    session = await Session.getSession(context.req, context.res);
  } catch (err) {
    if (err.type === Session.Error.TRY_REFRESH_TOKEN) {
      return { props: { fromSupertokens: 'needs-refresh' } };
    } else if (err.type === Session.Error.UNAUTHORISED) {
      return { props: {} };
    } else {
      throw err;
    }
  }

  return {
    props: { userId: session.getUserId() }
  };
}

export default function Protected(props) {
  return (
    <ThirdPartyEmailPasswordAuth>
      <ProtectedPage userId={props.userId} />
    </ThirdPartyEmailPasswordAuth>
  );
}

function ProtectedPage({ userId }) {
  const session = useSessionContext();

  async function logoutClicked() {
    await ThirdPartyEmailPassword.signOut();
    ThirdPartyEmailPassword.redirectToAuth();
  }

  async function fetchUserData() {
    const res = await fetch('/api/user');
    if (res.status === 200) {
      const json = await res.json();
      alert(JSON.stringify(json));
    }
  }

  if (session.loading === true) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WShell aside={undefined} footer={undefined} navbar={undefined}>
        <Container>
          <Title>Dashboard (where the apps go)</Title>
        </Container>
      </WShell>
    </>
  );
}
