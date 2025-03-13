
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, phone, service, message } = body;

    // Validate form data
    if (!firstname || !lastname || !email || !phone || !service || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('📨 Email Config:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      user: process.env.EMAIL_USER ? '✅ Set' : '❌ Not set',
      pass: process.env.EMAIL_PASSWORD ? '✅ Set' : '❌ Not set'
    });

    // Configure email transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail service for simplified setup
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use Google App Password (not regular password)
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'martina.consulting@outlook.com',
      subject: `New Contact Form Submission - ${service}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    console.log('🚀 Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.response);

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}
