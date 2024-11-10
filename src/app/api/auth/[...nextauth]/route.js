import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [
    {
      id: "github",
      name: "GitHub",
      type: "oauth",
      scope: "read:user",
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
        }
      },
    },
  ],
})

export { handler as GET, handler as POST }