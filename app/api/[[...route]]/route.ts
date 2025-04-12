import { z } from 'zod'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { zValidator } from "@hono/zod-validator"

export const runtime = 'edge'

const app = new Hono().basePath('/api')

// Route: /api/hello
app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

// Route: /api/hello/:id
app.get(
  '/hello/:id',
  zValidator('param', z.object({ id: z.coerce.number() })),
  (c) => {
    const { id } = c.req.valid('param')
    return c.json({
      message: 'Hello Next.js!',
      id,
    })
  }
)

export const GET = handle(app)
export const POST = handle(app)
