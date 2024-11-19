import Guestbook from '@/components/Guestbook'
import React from 'react'
import PageHeader from '@/components/page-header';


const GuestbookPage: React.FC = () => {
    return (
        <div className="container mx-auto py-4">
            <PageHeader title="Guestbook" description='Sign the Guestbook, leave a comment or just say "I was here!"'></PageHeader>
            <Guestbook />
        </div>
    );
};

export default GuestbookPage;
