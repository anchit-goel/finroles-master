import { type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { db } from '@/lib/db';
import { contactSubmissions } from '@/lib/schema';
import { contactFormSchema } from '@/lib/validations';
import { env } from '@/lib/env';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Parse and validate using Zod schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const firstErrorMessage = validationResult.error.issues[0]?.message || 'Invalid form input.';
      return Response.json(
        { success: false, error: firstErrorMessage },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // 1. Insert contact submission into database
    await db.insert(contactSubmissions).values({
      name,
      email,
      message,
    });

    // 2. Send email notification via Resend
    const resend = new Resend(env.RESEND_API_KEY);
    await resend.emails.send({
      from: env.RESEND_FROM_EMAIL,
      to: env.TO_EMAIL,
      subject: `New Finroles Hiring Mandate - ${name}`,
      text: `You have received a new hiring mandate submission from your website.\n\n` +
            `Client: ${name}\n` +
            `Email: ${email}\n\n` +
            `Mandate Details:\n${message}\n\n` +
            `Review this mandate in the admin dashboard using your secret.`,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return Response.json(
      { success: false, error: 'Internal server error occurred.' },
      { status: 500 }
    );
  }
}
