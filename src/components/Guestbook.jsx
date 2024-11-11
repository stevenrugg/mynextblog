// app/guestbook/Guestbook.tsx
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { signIn} from '../../auth'
import { guestbookSchema } from '@/lib/validationSchemas'; // adjust path as needed


export default function Guestbook() {
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMessages() {
      if (session) {
        const res = await fetch('/api/guestbook');
        const data = await res.json();
        setMessages(data);
      }
    }
    fetchMessages();
  }, [session]);

  async function handleSubmit(e) {
    e.preventDefault();

    // Validate data with Zod
    const validation = guestbookSchema.safeParse({ name, message });
    if (!validation.success) {
      setError(validation.error.errors[0].message); // Show the first validation error
      return;
    }
    setError(null); // Clear error if validation passes

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
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">Guestbook</h1>

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
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
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

          <div className="h-[500px] space-y-4 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-lg font-medium text-gray-700">{msg.name}</p>
                <p className="text-gray-600">{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
