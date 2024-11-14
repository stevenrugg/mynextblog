'use client';


import { useForm } from 'react-hook-form';
import { sendEmail } from '@/lib/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  
  return (
    
      <div className="container mb-5 max-w-4xl py-3 pb-4 lg:py-10">
     
        <hr/>
        <div className="mt-3 flex flex-col gap-8 p-6 lg:flex-row">
          {/* Left side with heading and paragraph */}
          <div className="lg:w-1/2">
            <h1 className="mb-4 text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg">
              Feel free to drop me a message. Whether it&apos;s about a project, collaboration, or just a friendly hello, I&apos;ll get back to you as soon as I can.
            </p>
          </div>
    
          {/* Right side with contact form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} target="" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('name', { required: true })}
                />
              </div>
    
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('email', { required: true })}
                />
              </div>
    
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('message', { required: true })}
                />
              </div>
    
              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
    
             
            </form>
          </div>
        </div>
    
    
    
    </div>
  );
}

export default Contact