import React, { useState, useEffect } from 'react';
import { z } from 'zod';

const Guestbook: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('/api/guestbook');
      const data = await res.json();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const schema = z.object({
      name: z.string().min(1).max(50),
      message: z.string().min(1).max(200),
    });

    try {
      schema.parse(formData);
      await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setFormData({ name: '', message: '' });
      const res = await fetch('/api/guestbook');
      setMessages(await res.json());
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Invalid input');
    }
  };

  return (
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Form Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Sign the Guestbook</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
                className="border rounded-md p-2 w-full"
            />
            <textarea
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                }
                className="border rounded-md p-2 w-full"
            ></textarea>
            {error && <p className="text-red-500">{error}</p>}
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Messages Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Messages</h2>
          <div className="flex flex-col gap-4">
            {messages.map((msg: any, idx: number) => (
                <div key={idx} className="border rounded-md p-4">
                  <p className="font-bold">{msg.name}</p>
                  <p>{msg.message}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Guestbook;
