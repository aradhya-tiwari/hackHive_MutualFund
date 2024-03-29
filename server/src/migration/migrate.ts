import { Kysely } from "kysely";
import { db } from "../db";

export async function up(db: Kysely<any>) {
    await db.schema.createTable('mf')
        .addColumn('id', 'integer', (col) => col.primaryKey().notNull())
        .addColumn('scheme_name', 'text', (col) => col.notNull())
        .addColumn('min_sip', 'real', (col) => col.notNull())
        .addColumn('min_lumpsum', 'real', (col) => col.notNull())
        .addColumn('expense_ratio', 'real', (col) => col.notNull())
        .addColumn('fund_size_cr', 'real', (col) => col.notNull())
        .addColumn('fund_age_yr', 'real', (col) => col.notNull())
        .addColumn('fund_manager', 'text', (col) => col.notNull())
        .addColumn('sortino', 'real', (col) => col.notNull())
        .addColumn('alpha', 'real', (col) => col.notNull())
        .addColumn('sd', 'real', (col) => col.notNull())
        .addColumn('beta', 'real', (col) => col.notNull())
        .addColumn('sharpe', 'real', (col) => col.notNull())
        .addColumn('risk_level', 'integer', (col) => col.notNull())
        .addColumn('amc_name', 'text', (col) => col.notNull())
        .addColumn('rating', 'integer', (col) => col.notNull())
        .addColumn('category', 'text', (col) => col.notNull())
        .addColumn('sub_category', 'text', (col) => col.notNull())
        .addColumn('returns_1yr', 'real', (col) => col.notNull())
        .addColumn('returns_3yr', 'real', (col) => col.notNull())
        .addColumn('returns_5yr', 'real', (col) => col.notNull())
        .addColumn('1yr_return_rank', 'real')
        .addColumn('3yr_return_rank', 'real')
        .addColumn('5yr_return_rank', 'real')
        .addColumn('sortino_rank', 'real')
        .addColumn('alpha_rank', 'real')
        .addColumn('sd_rank', 'real')
        .addColumn('beta_rank', 'real')
        .addColumn('sharpe_rank', 'real')
        .addColumn('expense_rank', 'real')
        .execute()

}

async function altern() {

    await db.schema.alterTable('mf').renameColumn('1yr_return_rank', 'rank_1yr').execute()
    await db.schema.alterTable('mf').renameColumn('3yr_return_rank', 'rank_3yr').execute()
    await db.schema.alterTable('mf').renameColumn('5yr_return_rank', 'rank_5yr').execute()
}
altern()
// up(db)

