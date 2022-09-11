import supertokens from 'supertokens-node';
import { superTokensNextWrapper } from 'supertokens-node/nextjs';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import { backendConfig } from '../../../config/backendConfig';
import { getSdk } from '../../../generated/graphClient';
import { graphQLClient } from '../../../lib/graphql.client';

const client = getSdk(graphQLClient);

supertokens.init(backendConfig());

const reservations = async (req, res) => {
  await superTokensNextWrapper(
    async (next) => {
      return await verifySession()(req, res, next);
    },
    req,
    res
  );

  const data = await client.upcomingOrders({ date: new Date().toISOString() }).catch((error) => {
    res.status(500).error(error);
    return;
  });
  res.status(200).json(data);
};

export default reservations;
