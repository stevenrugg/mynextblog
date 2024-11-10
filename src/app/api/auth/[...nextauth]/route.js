const NextAuth = require('next-auth');
const Providers = require('next-auth/providers');

const options = {
  providers: [
    Providers.Github({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET
    }),
  ],
  debug: false
};

module.exports = (req, res) => NextAuth(req, res, options);
