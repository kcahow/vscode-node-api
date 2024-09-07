import { Pool } from 'pg';

const pool = new Pool({
    user: "postgress",
    host: "localhost",
    database: "mydb",
    password: "test",
    port: 5432,
    idleTimeoutMillis: 30000
});

export { pool }