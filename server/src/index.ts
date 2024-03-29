import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { db } from './db'
import { sql } from 'kysely'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('*', cors({
  origin: "*"
}))
app.get('/', (c) => {

  return c.text('Hello Hello!!!')
})

app.get('/sortino', async (c) => {
  let term = c.req.query("term")
  let res;
  if (term == 'short')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(sortino_rank + rank_1yr)`, 'desc').limit(50).execute()
  else if (term == 'medium')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(sortino_rank + rank_3yr )`, 'desc').limit(50).execute()
  else if (term == 'long')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(sortino_rank + rank_5yr )`, 'desc').execute()
  return c.json(res)
})

app.get('/sharpe', async (c) => {
  let term = c.req.query("term")
  let res;
  if (term == 'short')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(sharpe_rank + rank_1yr)`, 'desc').limit(50).execute()
  else if (term == 'medium')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(sharpe_rank + rank_3yr )`, 'desc').limit(50).execute()
  else if (term == 'long')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(sharpe_rank + rank_5yr )`, 'desc').execute()
  return c.json(res)
})

app.get('/alpha', async (c) => {
  let term = c.req.query("term")
  let res;
  if (term == 'short')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(alpha_rank + rank_1yr)`, 'desc').limit(50).execute()
  else if (term == 'medium')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(alpha_rank + rank_3yr )`, 'desc').limit(50).execute()
  else if (term == 'long')
    res = await db.selectFrom('mf').selectAll().orderBy(sql`(alpha_rank + rank_5yr )`, 'desc').execute()
  return c.json(res)
})

app.get('/compare', async (c) => {
  let cat = c.req.query("cat")
  let res;

  res = await db.selectFrom('mf').selectAll().where("catergory", '=', cat).limit(50).execute()
  console.log(res)
})






const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
