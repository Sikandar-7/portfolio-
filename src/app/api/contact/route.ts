import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "sikandar8sa@gmail.com", // Send to user's email
      subject: `New Portfolio Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Budget: ${budget || "Not Specified"}

Message:
${message}
      `,
      html: `
        <h3>New Contact Message from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget || "Not Specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
