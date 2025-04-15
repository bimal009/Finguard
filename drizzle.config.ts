// drizzle.config.ts
import { defineConfig } from "drizzle-kit";


export default defineConfig({
  dialect: "postgresql",
  schema: "./db/Schema.ts",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_KPjRLS02GtmU@ep-steep-snow-a5uykfau-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
