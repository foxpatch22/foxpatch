// app/api/submit-request/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Use /tmp (Vercel’s writable directory)
const filePath = path.join('/tmp', 'submissions.json');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Read existing data (if any)
    let submissions: any[] = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(fileData || '[]');
    }

    // Append new submission
    submissions.push({ ...body, submittedAt: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    // ✅ Confirmation email to client
    try {
      await resend.emails.send({
        from: 'Foxpatch <onboarding@resend.dev>', // Use a verified domain in Resend
        to: body.email,
        subject: 'Thanks for reaching out to Foxpatch!',
        html: `
          <p>Hi ${body.firstName},</p>
          <p>Thank you for reaching out! Our team will review your request and get back to you shortly.</p>
          <p>Best,<br>The Foxpatch Team</p>
        `,
      });
    } catch (mailError) {
      console.error('❌ Failed to send confirmation email:', mailError);
    }

    // ✅ Notification email to Foxpatch team
    try {
      await resend.emails.send({
        from: 'Foxpatch Website <onboarding@resend.dev>', 
        to: 'foxpatch.in@gmail.com',
        subject: 'New Client Submission Received',
        html: `
          <h3>New Client Submission</h3>
          <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Company:</strong> ${body.company}</p>
          <p><strong>Project Description:</strong> ${body.projectDescription || 'N/A'}</p>
          <p><strong>Start Timeline:</strong> ${body.startTimeline || 'N/A'}</p>
          <p><strong>Services:</strong> ${body.services?.join(', ') || 'N/A'}</p>
          <p><strong>Referral:</strong> ${body.referral || 'N/A'}</p>
          <p><strong>Team Size:</strong> ${body.team || 'N/A'}</p>
          <p><strong>Calendly Link:</strong> ${body.calendlyLink || 'Not booked'}</p>
          <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
        `,
      });
    } catch (mailError) {
      console.error('❌ Failed to send notification email:', mailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to store data or send emails' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }

    const fileData = fs.readFileSync(filePath, 'utf-8');
    const submissions = JSON.parse(fileData || '[]');

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}