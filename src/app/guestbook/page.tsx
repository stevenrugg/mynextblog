import Guestbook from '@/components/Guestbook'
import React from 'react'


const GuestbookPage: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Guestbook</h1>
            <Guestbook />
        </div>
    );
};

export default GuestbookPage;
