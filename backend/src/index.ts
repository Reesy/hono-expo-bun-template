import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

const app = new Hono()

export const helloRoute = new Hono()
.get(
  '/',
  zValidator(
    'query',
    z.object({
      name: z.string(),
    })
  ),
  (c) => {
    const { name } = c.req.valid('query')
    return c.json({
      message: `Hello! ${name}`,
    })
  })

const apiRoutes = app.basePath('/api').route('/hello', helloRoute)
app.use('/api/*', cors())



export default app
export type ApiRoutes = typeof apiRoutes