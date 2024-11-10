import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'


const options = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET
    })
  ],
  debug: false
}
const authHandler = NextAuth(options)
export default authHandler
