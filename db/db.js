var config = require('../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]);

// exports.TABLES = {
//   LANES: 'lanes',
//   JOBS: 'jobs',
//   LANES_JOBS: 'lanes_jobs',  
// };