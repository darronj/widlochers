import { TypeInput } from 'supertokens-node/lib/build/types';
import SessionNode from 'supertokens-node/recipe/session';
import ThirdPartyEmailPasswordNode from 'supertokens-node/recipe/thirdpartyemailpassword';
import { appInfo } from './appInfo';

export let backendConfig = (): TypeInput => {
  return {
    framework: 'express',
    supertokens: {
      connectionURI: 'http://157.230.203.183:3567'
    },
    appInfo,
    recipeList: [
      ThirdPartyEmailPasswordNode.init({
        providers: [
          // We have provided you with development keys which you can use for testing.
          // IMPORTANT: Please replace them with your own OAuth keys for production use.
          // ThirdPartyEmailPasswordNode.Google({
          //   clientId: process.env.GOOGLE_CLIENT_ID as string,
          //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
          // }),
          // ThirdPartyEmailPasswordNode.Github({
          //   clientId: process.env.GITHUB_CLIENT_ID as string,
          //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string
          // }),
          // ThirdPartyEmailPasswordNode.Apple({
          //   clientId: process.env.APPLE_CLIENT_ID as string,
          //   clientSecret: {
          //     keyId: process.env.APPLE_KEY_ID as string,
          //     privateKey: (process.env.APPLE_PRIVATE_KEY as string).replace(/\\n/g, '\n'),
          //     teamId: process.env.APPLE_TEAM_ID as string
          //   }
          // })
        ]
      }),
      SessionNode.init({
        jwt: {
          enable: true
        },
        override: {
          functions: (originalImplementation) => {
            return {
              ...originalImplementation,
              createNewSession: async function (input) {
                let userId = input.userId;

                // This goes in the access token, and is availble to read on the frontend.
                input.accessTokenPayload = {
                  ...input.accessTokenPayload,
                  'https://hasura.io/jwt/claims': {
                    'x-hasura-user-id': input.userId,
                    'x-hasura-default-role': 'user',
                    'x-hasura-allowed-roles': ['user']
                  }
                };

                // This is stored in the db against the sessionHandle for this session
                input.sessionData = {
                  ...input.sessionData,
                  'https://hasura.io/jwt/claims': {
                    'x-hasura-user-id': input.userId,
                    'x-hasura-default-role': 'user',
                    'x-hasura-allowed-roles': ['user']
                  }
                };

                return originalImplementation.createNewSession(input);
              }
            };
          }
        }
      })
    ],
    isInServerlessEnv: true
  };
};
