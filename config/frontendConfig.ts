import Router from 'next/router';
import SessionReact from 'supertokens-auth-react/recipe/session';
import ThirdPartyEmailPasswordReact from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import { appInfo } from './appInfo';

export let frontendConfig = () => {
  return {
    appInfo,
    recipeList: [
      ThirdPartyEmailPasswordReact.init({
        getRedirectionURL: async (context) => {
          if (context.action === 'SUCCESS') {
            if (context.redirectToPath !== undefined) {
              // we are navigating back to where the user was before they authenticated
              return context.redirectToPath;
            }
            return '/dashboard';
          }
          return undefined;
        },
        emailVerificationFeature: {
          mode: 'REQUIRED'
        },
        signInAndUpFeature: {
          providers: [
            // ThirdPartyEmailPasswordReact.Google.init(),
            // ThirdPartyEmailPasswordReact.Github.init(),
            // ThirdPartyEmailPasswordReact.Apple.init()
          ]
        }
      }),
      SessionReact.init()
    ],
    // this is so that the SDK uses the next router for navigation
    windowHandler: (oI) => {
      return {
        ...oI,
        location: {
          ...oI.location,
          setHref: (href) => {
            Router.push(href);
          }
        }
      };
    }
  };
};
