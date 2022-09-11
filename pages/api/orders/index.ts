import supertokens from 'supertokens-node';
import { superTokensNextWrapper } from 'supertokens-node/nextjs';
import { verifySession } from 'supertokens-node/recipe/session/framework/express';
import { backendConfig } from '../../../config/backendConfig';
import { bakeryClient } from '../../../lib/bakery';

supertokens.init(backendConfig());

const orders = async (req, res) => {
  await superTokensNextWrapper(
    async (next) => {
      return await verifySession()(req, res, next);
    },
    req,
    res
  );

  const data = await bakeryClient.orders().catch((error) => {
    res.status(500).error(error);
    return;
  });
  res.status(200).json(data);
};

export default orders;
