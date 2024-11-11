'use client'

// app/guestbook/Guestbook.tsx
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { signIn } from '../../auth';



export default function Guestbook() {
  
 
 const { data: session, status } = useSession();
  useEffect(() => {
    async function fetchSession() {
     
      const res = await fetch('/api/auth/session');
     return res.json();
      
     
   
    }
    fetchSession();
  }, [session, status]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (session) {
      async function fetchMessages() {
        const res = await fetch('/api/guestbook');
        const data = await res.json();
        setMessages(data);
      }
      fetchMessages();
    }
  }, [session]);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/guestbook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message }),
    });
    if (res.ok) {
      const newMessage = await res.json();
      setMessages([newMessage, ...messages]);
      setName('');
      setMessage('');
    }
  }

  return (
    <div className="mx-auto max-w-fit p-2">

      {!session ? (
        <div className="text-center">
          <p className="mb-4">You must be signed in to access the guestbook.</p>
          <button
            onClick={() => signIn()}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition duration-200 hover:bg-blue-700"
            >
              Submit
            </button>
          </form>

          {/* Messages Section */}
          <div className="h-[500px] space-y-4 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-lg font-bold italic text-primary">{msg.name}</p>
                <p className="text-primary">{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
