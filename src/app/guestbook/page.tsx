// app/guestbook/page.tsx
'use client';

import{ useUser } from '@auth0/nextjs-auth0/client';
import Guestbook from '@/components/Guestbook';
import useRouter from 'next/navigation';import Link from 'next/link';




function GuestbookPage () {
  const { user, isLoading } = useUser();

  if (isLoading) return(`<p>Loading...</p>`);

  if (!user) {
    return (
      <div className="text-center">
        <p>You must be logged in to access the guestbook.</p>
        <Link href='api/auth/login' className="text-blue-500 hover:underline">Login</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto p-8 container">
      <Guestbook />
    </div>
  );
};

export default GuestbookPage;
