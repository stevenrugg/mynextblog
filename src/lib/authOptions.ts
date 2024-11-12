import GitHubProvider from 'next-auth/providers/github';
import { NextAuthOptions } from 'next-auth';




export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: 'jwt', // or 'database' if you’re persisting sessions to a database
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
