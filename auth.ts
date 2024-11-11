import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub
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
  providers: [GitHub],
  experimental: { enableWebAuthn: true },
  callbacks: {
    async session({ session, token }: { session: any, token: any }) {
      session.userId = token.sub ?? "";
      return session;
    },
  },
}




