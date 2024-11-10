// src/app/api/guestbook/route.ts

import  getSessionParams from 'next-auth';
import { authOptions } from '@/app/auth'
import { NextResponse } from 'next/server';
import { guestbookSchema } from '@/lib/validationSchemas';
import prisma from '@/lib/prisma';

// POST /api/guestbook - Adds a new guestbook message
export async function POST(req: Request) {
  const session = getSessionParams(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await req.json();
    const validatedData = guestbookSchema.parse(data);

    const newMessage = await prisma.guestbook.create({
      data: validatedData,
    });

    return NextResponse.json(newMessage);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.errors || 'Invalid input' },
      { status: 400 }
    );
  }
}

// GET /api/guestbook - Retrieves guestbook messages
export async function GET() {
  const messages = await prisma.guestbook.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(messages);
}
