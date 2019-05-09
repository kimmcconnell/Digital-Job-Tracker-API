const knex = require('knex');
const environment = 'development';
const config = require('./knexfile');

exports.db = knex(config[environment]);

exports.TABLES = {
  LANES: 'lanes',
  JOBS: 'jobs',
  LANES_JOBS: 'lanes_jobs',  
};