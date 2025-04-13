import { pgTable, text } from "drizzle-orm/pg-core";

export const Accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
});
