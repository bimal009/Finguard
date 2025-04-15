import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  plaidId:text("plaid_id").notNull(),
  userId:text("user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// npx drizzle-kit push to push inn data base