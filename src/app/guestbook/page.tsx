// app/guestbook/page.tsx
'use client';

import{ useUser } from '@auth0/nextjs-auth0/client';
import Guestbook from '@/components/Guestbook';

function GuestbookPage () {
  const { user, isLoading } = useUser();

  if (isLoading) return(`<p>Loading...</p>`);

  if (!user) {
    return (
      <div className="text-center">
        <p>You must be logged in to access the guestbook.</p>
        <a href="/api/auth/login" className="text-blue-500 hover:underline">Login</a>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <Guestbook />
    </div>
  );
};

export default GuestbookPage;
