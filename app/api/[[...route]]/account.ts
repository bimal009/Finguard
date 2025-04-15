import { Hono } from "hono";
import db from "@/db/drizzle";
import { accounts } from "@/db/Schema";
import { HTTPException } from 'hono/http-exception'
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const app = new Hono()

.get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    throw new HTTPException(401, {
      res: c.json({ error: "unauthorized" }),
    });
  }

  const data = await db
    .select({
      id: accounts.id,
      name: accounts.name,
    })
    .from(accounts);

  return c.json({ accounts: data });
});

export default app;
