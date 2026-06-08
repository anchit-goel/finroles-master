import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY must not be empty'),
  RESEND_FROM_EMAIL: z.string().email('RESEND_FROM_EMAIL must be a valid email'),
  ADMIN_SECRET: z.string().min(1, 'ADMIN_SECRET must not be empty'),
  TO_EMAIL: z.string().email('TO_EMAIL must be a valid email'),
});

const parseEnv = () => {
  const result = envSchema.safeParse({
    DATABASE_URL: process.env.DATABASE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    ADMIN_SECRET: process.env.ADMIN_SECRET,
    TO_EMAIL: process.env.TO_EMAIL,
  });

  if (!result.success) {
    const errorDetails = JSON.stringify(result.error.format(), null, 2);
    console.error('❌ Invalid environment variables:\n', errorDetails);
    throw new Error(`Invalid environment variables: ${errorDetails}`);
  }

  return result.data;
};

export const env = parseEnv();
