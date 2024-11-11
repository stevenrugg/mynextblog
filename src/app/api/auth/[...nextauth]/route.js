
import { handlers, auth } from '../../../../../auth'
const handler = auth(handlers)
export { handler as GET, handler as POST}