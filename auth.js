import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET
    })
  ],
  experimental: { enableWebAuthn: true },
  callbacks: {
    async session({ session, token }) {
      session.userId = token.sub ?? "";
      return session;
    },
  },
})

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET
    })
  ],
  experimental: { enableWebAuthn: true },
  callbacks: {
    async session({ session, token }) {
      session.userId = token.sub ?? "";
      return session;
    },
  },
}




