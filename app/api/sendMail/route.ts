// pages/api/sendMail.ts
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';

const sendgridApiKey = process.env.SENDGRID_API_KEY;

// Set the SendGrid API key
if (sendgridApiKey) {
    sgMail.setApiKey(sendgridApiKey);
} else {
    console.error('SendGrid API key is not defined!');
    // Consider handling this error appropriately
}

export async function POST(request: Request) {

    try {
        const msg = {
            to: "khorzx01@gmail.com", // recipient's email
            from: 'andrew@growthcharger.com', // Replace with your verified sender email
            subject: 'Fall Detected!',
            text: 'A fall has been detected, please check',
        };

        await sgMail.send(msg);
        return NextResponse.json({ message: 'Emailed sent'}, { status: 200 });
      } catch (error) {
          console.error('Not sent', error);
          return NextResponse.json({ error }, { status: 500 });
      }
}
