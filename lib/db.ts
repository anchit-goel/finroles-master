import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Lazy singleton — the connection is only created when first used at runtime,
// not at module evaluation time (which would crash the Vercel build phase).
let _db: ReturnType<typeof drizzle> | null = null;

export function getDb() {
  if (!_db) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is not set');
    }
    const sql = neon(databaseUrl);
    _db = drizzle(sql);
  }
  return _db;
}

// Keep the named `db` export for backwards compatibility but make it a getter proxy
// that defers initialization to the first property access.
export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop, receiver) {
    return Reflect.get(getDb(), prop, receiver);
  },
});
