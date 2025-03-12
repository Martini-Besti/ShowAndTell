// // File: app/api/send-email/route.js (Next.js 13+)
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { firstname, lastname, email, phone, service, message } = body;

//     // Validate form data
//     if (!firstname || !lastname || !email || !phone || !service || !message) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // Configure email transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST, // e.g., "smtp.outlook.com"
//       port: parseInt(process.env.EMAIL_PORT || "587"),
//       secure: process.env.EMAIL_SECURE === "true",
//       auth: {
//         user: process.env.EMAIL_USER, // Your email address
//         pass: process.env.EMAIL_PASSWORD, // Your email password or app password
//       },
//     });

//     // Prepare email content
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: "martina.consulting@outlook.com", // Your email where you want to receive form submissions

//       subject: `New Contact Form Submission - ${service}`,
//       text: `
//         Name: ${firstname} ${lastname}
//         Email: ${email}
//         Phone: ${phone}
//         Service: ${service}
//         Message: ${message}
//       `,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${firstname} ${lastname}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { message: "Email sent successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { message: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }
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

    console.log('Email config:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      user: process.env.EMAIL_USER ? 'Set' : 'Not set',
      pass: process.env.EMAIL_PASSWORD ? 'Set' : 'Not set'
    });

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { message: 'Email configuration error', error: verifyError.message },
        { status: 500 }
      );
    }

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
    console.log('Attempting to send email...');
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      return NextResponse.json(
        { message: 'Email sent successfully', messageId: info.messageId },
        { status: 200 }
      );
    } catch (sendError) {
      console.error('Send error details:', sendError);
      return NextResponse.json(
        { message: 'Failed to send email', error: sendError.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('General error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}