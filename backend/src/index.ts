import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { userrouter } from './routing/user'
import { blogrouter } from './routing/blog'
import { cors } from 'hono/cors'
const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
    JWT_SECRET : string
  }
}>
app.use('/*',cors())
app.route("/api/v1/user",userrouter)
app.route("/api/v1/blog",blogrouter)


export default app
 