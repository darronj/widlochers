import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://157.230.203.183:8080/v1/graphql';

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret': 'cheesecake4life'
  }
});

export default graphQLClient;
