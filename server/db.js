import pg from "pg";

const DB = new pg.Client({
    user: 'me',
    host: 'localhost',
    database: 'week11',
    password: 'password',
    port: 5432
});

export default DB;