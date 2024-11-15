// components/Guestbook.tsx
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PageHeader from './page-header';

const guestbookSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
  message: z.string().min(10, { message: 'Message must be at least 2 characters long' }),
});

type GuestbookForm = z.infer<typeof guestbookSchema>;

const Guestbook = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<GuestbookForm>({
    resolver: zodResolver(guestbookSchema),
  });

  const [status, setStatus] = useState<string | null>(null);
  const [entries, setEntries] = useState<any[]>([]);

  // Fetch existing guestbook entries on mount
  useEffect(() => {
    const fetchEntries = async () => {
      const res = await fetch('/api/guestbook/');
      const data = await res.json();
      setEntries(data);
    };

    fetchEntries();
  }, []);

  const onSubmit = async (data: GuestbookForm) => {
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('Message submitted!');
        const newEntry = await res.json();
        setEntries([newEntry.entry, ...entries]); // Add the new entry to the top
      } else {
        setStatus('Error submitting message.');
      }
    } catch (error) {
      setStatus('Error submitting message.');
    }
  };

  return (
    <>
    <PageHeader title="Guestbook" description="Sign the guestbook, leave a comment or just say 'I was here'."></PageHeader>
    <div className="flex md:flex-row flex-col gap-8 p-8">
      {/* Form Section (Right) */}
      <div className="bg-secondary shadow-lg p-6 rounded-lg w-full md:w-1/3">
        <h2 className="mb-4 font-semibold text-slate-100 text-xl">Sign the Guestbook</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium text-slate-100 text-sm">Name</label>
            <input
              id="name"
              {...register('name')}
              className="border-slate-300 mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 w-full text-slate-800 focus:outline-none"
            />
            {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium text-slate-200 text-sm">Message</label>
            <textarea
              id="message"
              {...register('message')}
              className="border-gray-300 mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 w-full text-slate-800 focus:outline-none min-h-40"
            />
            {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 w-full text-white focus:outline-none"
          >
            Submit
          </button>
        </form>
        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </div>

      {/* Messages Section (Left) */}
      <div className="bg-secondary shadow-lg p-6 rounded-lg w-full md:w-2/3 max-h-[80vh] overflow-y-auto">
        <h2 className="mb-4 font-semibold text-slate-100 text-xl">Previous Entries</h2>
        <ul className="space-y-4">
          {entries.map((entry) => (
            <li key={entry.id} className="pb-4 border-b">
              <div>
                <strong className="text-lg text-slate-400">{entry.name}</strong>
                <p className="mt-1 text-slate-200 text-sm">{entry.message}</p>
                <small className="block mt-2 text-slate-200 text-xs">{new Date(entry.createdAt).toLocaleString()}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Guestbook;
