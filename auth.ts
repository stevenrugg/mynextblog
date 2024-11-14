
import NextAuth from "next-auth"
import { authOptions } from "@/lib/authOptions"

export default NextAuth(authOptions)

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
  




