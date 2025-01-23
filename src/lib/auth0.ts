import { initAuth0, Auth0Server } from '@auth0/nextjs-auth0';

export const pageRouterAuth: Auth0Server = initAuth0({
  auth0Logout: !(process.env.AUTH0_ISSUER_BASE_URL as string).startsWith(''),
  routes: {
    login: '/api/auth/login',
    callback: '/api/auth/callback',
    postLogoutRedirect: '/guestbook'
  }
});