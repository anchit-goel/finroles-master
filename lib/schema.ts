import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  isRead: boolean('is_read').default(false).notNull(),
});

// Infer types from schema
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type NewContactSubmission = typeof contactSubmissions.$inferInsert;
