// pages/api/guestbook.ts

import { auth } from '@/app/auth';
import { guestbookSchema } from '@/lib/validationSchemas';
import prisma from '@/lib/prisma';

<<<<<<< HEAD:src/app/api/guestbook/route.js
export default async function handler(req, res) {
=======
export default async function handleAuth(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> c6343c39519c7e63bbacb65c4ea5ea47ae694066:src/app/api/guestbook/route.ts
  const session = await auth();
  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'POST') {
    try {
      // Validate data with Zod
      const validatedData = guestbookSchema.parse(req.body);
      const newMessage = await prisma.guestbook.create({
        data: validatedData,
      });
      res.json(newMessage);
    } catch (error) {
      res.status(400).json({ error: error.errors || 'Invalid input' });
    }
  } else if (req.method === 'GET') {
    const messages = await prisma.guestbook.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(messages);
  }
}
