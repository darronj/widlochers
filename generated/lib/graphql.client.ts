import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPH_URL || '';
export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret': process.env.ADMIN_SECRET_KEY
  }
});
