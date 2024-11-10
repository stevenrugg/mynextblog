// pages/api/guestbook.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@/app/auth';
import { guestbookSchema } from '@/lib/validationSchemas';
import prisma from '@/lib/prisma';

export default async function handleAuth(req: NextApiRequest, res: NextApiResponse) {
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
      if (error instanceof Error) {
        res.status(400).json({ error: (error as any).errors || 'Invalid input' });
      } else {
        res.status(400).json({ error: 'Invalid input' });
      }
    }
  } else if (req.method === 'GET') {
    const messages = await prisma.guestbook.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(messages);
  }
}
