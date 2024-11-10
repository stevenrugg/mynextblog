import * as handlers from "@/app/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
export const runtime = "edge"