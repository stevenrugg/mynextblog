
import { NextAuth } from 'next-auth'
import { handlers } from '../../../../../auth'
const handler = NextAuth(handlers)
export { handler as GET, handler as POST}