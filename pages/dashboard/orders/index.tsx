import { Container, List, Table, Title } from '@mantine/core';
import moment from 'moment';
import Head from 'next/head';
import { useMemo, useState } from 'react';
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
  const { orders } = await bakeryClient.upcomingOrders({ date });

  return {
    props: { userId: session.getUserId(), orders }
  };
}

export default function ProtectedOrders(props) {
  return (
    <ThirdPartyEmailPasswordAuth>
      <Orders {...props} />
    </ThirdPartyEmailPasswordAuth>
  );
}

function Orders({ userId, orders }) {
  const date = new Date().toISOString();
  //console.log(data);
  
  
  const rows = orders.map((order) => (
    <tr key={order.id}>
      <td>{order.date_needed}</td>
      <td>{moment(order?.date_needed).fromNow()}</td>
      <td>{order.customer.name}</td>
      <td>
        <List>
          {order.details?.map((item, i) => (
            <List.Item key={i}>{item.product.name}</List.Item>
          ))}
        </List>
      </td>
      <td>{order.status}</td>
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
