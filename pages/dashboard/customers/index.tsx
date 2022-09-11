import { Container, Table, Title } from '@mantine/core';
import Head from 'next/head';
import { ThirdPartyEmailPasswordAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import supertokensNode from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import WShell from '../../../components/Layout/Layout';
import { backendConfig } from '../../../config/backendConfig';
import { bakeryClient } from '../../../lib/bakery';

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

  const date = new Date().toISOString();
  const { customers } = await bakeryClient.customers();

  return {
    props: { userId: session.getUserId(), customers }
  };
}

export default function ProtectedOrders(props) {
  return (
    <ThirdPartyEmailPasswordAuth>
      <Customers {...props} />
    </ThirdPartyEmailPasswordAuth>
  );
}

function Customers({ userId, customers }) {
  const date = new Date().toISOString();
  //console.log(data);

  const rows = customers.map((customer) => (
    <tr key={customer.id}>
      <td>{customer.name}</td>
      <td>{customer.phone}</td>
      <td>{customer.email}</td>
      <td>{customer.orders_aggregate?.aggregate?.count}</td>
      <td></td>
    </tr>
  ));

  return (
    <>
      <Head>
        <title>Calendar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WShell aside={undefined} footer={undefined} navbar={undefined}>
        <Container>
          <Title>Customers</Title>
          <Table
            horizontalSpacing={'md'}
            verticalSpacing={'md'}
            fontSize={'md'}
            striped
            highlightOnHover
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Total Orders Placed</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
      </WShell>
    </>
  );
}
