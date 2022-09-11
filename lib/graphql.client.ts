import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_GRAPH_URL || 'http://157.230.203.183:8080/v1/graphql';
export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret': process.env.ADMIN_SECRET_KEY || 'cheesecake4life'
  }
});
