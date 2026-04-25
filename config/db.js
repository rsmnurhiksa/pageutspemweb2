const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'taskdb',
  password: 'passwordmu',
  port: 5432,
});

module.exports = pool;
