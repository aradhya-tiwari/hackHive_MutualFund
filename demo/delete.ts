import fs from 'fs/promises'
import { db } from '../server/src/db'
async function del() {
    let rd = await fs.readFile('./demo/data2.json')
    // console.log(await JSON.parse(rd.toString()))
    let mfData = JSON.parse(rd.toString())
    mfData.map(async (e) => {

        await db.deleteFrom('mf').where('scheme_name', '=', '').execute()
    }
    )
}
del()