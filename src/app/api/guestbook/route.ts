// app/agr/guestbook/route.ts
import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';  // import Prisma client
import { z } from 'zod';

const guestbookSchema = z.object({
  name: z.string().min(2),
  message: z.string().min(2),
});

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    const parsed = guestbookSchema.parse(body);

    // Create a new guestbook entry in the database
   const newEntry = await prisma.guestbook.create({
      data: {
        name: parsed.name,
        message: parsed.message,
      },
    });

    return NextResponse.json({ message: 'Entry successfully added!', entry: newEntry });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Invalid input or failed to save' }, { status: 400 });
  }
}

export async function GET() {
  const entries = await prisma.guestbook.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(entries);
}
