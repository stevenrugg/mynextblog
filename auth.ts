import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({ clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID, clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET }),
  ],
  experimental: { enableWebAuthn: true },
  callbacks: {
    async session({ session, token }: { session: any, token: any }) {
      session.userId = token.sub ?? "";
      return session;
    },
  },
})

export const authOptions = {
  providers: [
    GitHub({ clientId: process.env.NEXTAUTH_GITHUB_CLIENT_ID, clientSecret: process.env.NEXTAUTH_GITHUB_CLIENT_SECRET }),
  ],
  experimental: { enableWebAuthn: true },
  callbacks: {
    async session({ session, token }: { session: any, token: any }) {
      session.userId = token.sub ?? "";
      return session;
    },
  },
}




