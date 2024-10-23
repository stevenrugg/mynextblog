import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      
    auth: {
      user: process.env.NEXT_PRIVATE_EMAIL_USER,
      pass: process.env.NEXT_PRIVATE_EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PRIVATE_EMAIL_USER,
    to: process.env.NEXT_PRIVATE_EMAIL_USER,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
          alert('Email sent successfully!');
        } else {
          alert('Failed to send email. Please try again later.');
          reject(err.message);
          
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}