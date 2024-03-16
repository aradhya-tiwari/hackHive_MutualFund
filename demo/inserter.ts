import fs from 'fs/promises'
import { db } from '../server/src/db'
async function read() {
    let rd = await fs.readFile('./demo/demo.json')
    // console.log(await JSON.parse(rd.toString()))
    let mfData = JSON.parse(rd.toString())
    mfData.map(async (e) => {

        await db.insertInto('mf').values(e).execute()
    }
    )
}
read()