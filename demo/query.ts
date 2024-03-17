import { db } from "../server/src/db";
import { sql } from 'kysely'
async function getBest() {
    let res = await db.selectFrom('mf').select(sql`(id + returns_1yr) as sum,id,returns_1yr`).execute()
    console.log(res)
    return
}
console.log(getBest())