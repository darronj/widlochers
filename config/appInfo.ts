const port = process.env.PORT || 3000;

const apiBasePath = '/api/auth/';

export const websiteDomain =
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  process.env.APP_URL ||
  process.env.NEXT_PUBLIC_APP_URL ||
  `http://localhost:${port}`;

export const appInfo = {
  appName: "Widlocher's",
  websiteDomain,
  apiDomain: websiteDomain,
  apiBasePath
};
