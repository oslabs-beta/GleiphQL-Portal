import * as pg from 'pg';

//const PG_URI: string = process.env.PG_URI || '';
const PG_URI = 'postgres://ofrazosd:rkoV-04ehlexIH3tHQNKt3rNMbKJ7_wM@rajje.db.elephantsql.com/ofrazosd'

export const pool: pg.Pool = new pg.Pool({
    connectionString: PG_URI,
});

const db = {
  query: (text: string, params?: any[]) : Promise<pg.QueryResult> => {
    return pool.query(text, params);
  }
};

export default db;