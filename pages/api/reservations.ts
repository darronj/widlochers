import { gql } from 'graphql-request';
import supertokens from 'supertokens-node';
import { superTokensNextWrapper } from 'supertokens-node/nextjs';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import { backendConfig } from '../../config/backendConfig';
import { graphQLClient } from '../../lib/graphql.client';

supertokens.init(backendConfig());

const reservations = async (req, res) => {
  await superTokensNextWrapper(
    async (next) => {
      return await verifySession()(req, res, next);
    },
    req,
    res
  );

  const query = gql`
    query currentOrders {
      orders(where: { status: { _neq: DELIVERED } }, order_by: { date_needed: asc }) {
        customer_id
        customer {
          name
          phone
          email
        }
        date_needed
        details {
          id
          product {
            name
          }
          options
          comment
          price
        }
        status
        payment_status
      }
    }
  `;

  graphQLClient
    .request(query)
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).error(error);
    });
};

export default reservations;
