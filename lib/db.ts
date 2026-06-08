import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from './env';

// Create Neon HTTP connection
const sql = neon(env.DATABASE_URL);

// Create Drizzle ORM client
export const db = drizzle(sql);
