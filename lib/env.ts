import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY must not be empty'),
  RESEND_FROM_EMAIL: z.string().email('RESEND_FROM_EMAIL must be a valid email'),
  ADMIN_SECRET: z.string().min(1, 'ADMIN_SECRET must not be empty'),
  TO_EMAIL: z.string().email('TO_EMAIL must be a valid email'),
});

// Validate lazily so module-level import does not crash the Next.js build phase.
// Values are only validated when getEnv() is called at request time.
let _env: z.infer<typeof envSchema> | null = null;

export function getEnv(): z.infer<typeof envSchema> {
  if (!_env) {
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

    _env = result.data;
  }
  return _env;
}

// Proxy keeps the legacy `env.FIELD` access pattern working
// while deferring validation to first use at runtime.
export const env = new Proxy({} as z.infer<typeof envSchema>, {
  get(_target, prop) {
    return getEnv()[prop as keyof z.infer<typeof envSchema>];
  },
});
