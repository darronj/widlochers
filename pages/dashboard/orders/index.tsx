import { Container, List, Table, Title } from '@mantine/core';
import moment from 'moment';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ThirdPartyEmailPasswordAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import supertokensNode from 'supertokens-node';
import Session from 'supertokens-node/recipe/session';
import WShell from '../../../components/Layout/Layout';
import { backendConfig } from '../../../config/backendConfig';

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

export default function ProtectedOrders(props) {
  return (
    <ThirdPartyEmailPasswordAuth>
      <Orders {...props} />
    </ThirdPartyEmailPasswordAuth>
  );
}

function Orders({ userId }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('/api/orders/upcoming')
      .then((res) => res.json())
      .then((o) => {
        setOrders(o.orders);
      });
  }, []);

  const rows = orders.map((element) => (
    <tr key={element.id}>
      <td>{element.date_needed}</td>
      <td>{moment(element?.date_needed).fromNow()}</td>
      <td>{element.customer.name}</td>
      <td>
        <List>
          {element.details?.map((item, i) => (
            <List.Item key={i}>{item.product.name}</List.Item>
          ))}
        </List>
      </td>
      <td>{element.status}</td>
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
          <Title>Orders</Title>
          <Table
            horizontalSpacing={'md'}
            verticalSpacing={'md'}
            fontSize={'md'}
            striped
            highlightOnHover
          >
            <thead>
              <tr>
                <th>Date Needed</th>
                <th>Countdown</th>
                <th>Customer Name</th>
                <th>Items</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Container>
      </WShell>
    </>
  );
}
