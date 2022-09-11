import { getSdk } from '../generated/graphClient';
import { graphQLClient } from './graphql.client';
export const bakeryClient = getSdk(graphQLClient);

export default bakeryClient;
