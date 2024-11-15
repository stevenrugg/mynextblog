

import { handleAuth} from '@auth0/nextjs-auth0'

const handler = handleAuth();

// HANDLER AS GET AND POST REQUESTS
export {handler as GET, handler as POST}
