const pg = require('pg');
const pgClient = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'greenfield',
  user: 'postgres',
  password: 'postgres'
});
pgClient
  .connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack));

module.exports = pgClient;