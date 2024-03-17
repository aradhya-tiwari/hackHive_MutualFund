import Database from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'

const sqlite = new Database('../db/mf2.db')

const dialect = new SqliteDialect({
    database: sqlite
})
export const db = new Kysely({ dialect })