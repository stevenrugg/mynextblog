// app/guestbook/page.tsx
'use client';

import Guestbook from '@/components/Guestbook';

function GuestbookPage () {

  return (
    <div className="container mx-auto p-8">
      <Guestbook />
    </div>
  );
};

export default GuestbookPage;
