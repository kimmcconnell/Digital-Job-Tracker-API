var config = require('../knexfile.js');
var env = 'development';

const knex = require(`knex`) ({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'kanban_local'
  }
});

module.exports = knex;


// exports.TABLES = {
//   LANES: 'lanes',
//   JOBS: 'jobs',
//   LANES_JOBS: 'lanes_jobs',  
// };