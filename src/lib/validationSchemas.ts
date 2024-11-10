// validationSchemas.ts
import { z } from 'zod';

export const guestbookSchema = z.object({
  name: z
    .string()
    .min(1, "Name can't be empty")
    .max(50, "Name can't exceed 50 characters")
    .regex(/^[a-zA-Z0-9\s]+$/, 'Name can only contain letters, numbers, and spaces'),
  message: z
    .string()
    .min(1, "Message can't be empty")
    .max(200, "Message can't exceed 200 characters"),
});
