
// app/contact/page.tsx



export default function Contact() {
 
  async function handleSubmit(e: any) {
   
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "process.env.NEXT_SECRET_EMAIL_API_KEY",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
       alert("Your message was sent sucessfully");
    } else {
      alert("Your message was not sent")
    }
    
}

  return (
    <div className="flex flex-col gap-8 p-6 lg:flex-row">
      {/* Left side with heading and paragraph */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-lg">
          I&apos;d love to hear from you! Whether you have a question about projects, collaborations, or just want to say hi, feel free to reach out to us using the form.
        </p>
      </div>

      {/* Right side with form */}
      <div className="lg:w-1/2">
        <form action={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className=" mt-1 block w-full rounded-md border border-gray-300 p-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className=" mt-1 block w-full rounded-md border border-gray-300 p-2 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>

          {/* Status message */}
        
          {status && <p className="mt-4 text-lg font-semibold">{status}</p>}
        </form>
      </div>
    </div>
  );
}
