'use client'

import React, { useState, useEffect } from 'react';
import { z } from 'zod';

const Guestbook: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('https://seattlesupergeek.io/api/guestbook');
      const data = await res.json();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const schema = z.object({
      name: z.string().min(2).max(50),
      message: z.string().min(2).max(200),
    });

    try {
      schema.parse(formData);
      await fetch('https://seattlesupergeek.io/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setFormData({ name: '', message: '' });
      const res = await fetch('https://seattlesupergeek.io/api/guestbook');
      setMessages(await res.json());
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Invalid input');
    }
  };

  return (
    <div className='mx-auto max-w-7xl p-1 text-primary'>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        <div className="bg-secondary lg:w-1/2 pt-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
            <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
                className="mt-4 text-slate-800 pl-3 border rounded-md w-8/12 h-10"
            />
            <textarea
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                }
                className="text-slate-800 pl-3 border rounded-md p-2 m w-8/12 min-h-48"
            ></textarea>
            {error && <p className="text-red-500">{error}</p>}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-48"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Messages Section */}
        <div className="bg-secondary lg:w-1/2">
          <h2 className="text-center text-2xl font-bold mb-4 py-4">Messages</h2>
          <div className="flex flex-col gap-4 overflow-y-auto h-96">
            {messages.map((msg: any, idx: number) => (
                <div key={idx} className="mx-4 border  border-fuchsia-500 rounded-md p-4">
                  <p className="text-slate-200 font-bold">{msg.name}</p>
                  <p className="text-sm text-slate-200">{msg.message}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
};

export default Guestbook;
