import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
