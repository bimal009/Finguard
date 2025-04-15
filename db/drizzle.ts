import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./Schema"

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql ,{schema});

const result = await db.execute('select 1');
export default db;
