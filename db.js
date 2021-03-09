const pg = require('pg');
const pgClient = new pg.Client({
  host: 'ec2-3-140-210-187.us-east-2.compute.amazonaws.com',
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