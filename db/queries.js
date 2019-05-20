const knex = require('./db');
// var db  = require('./db');

module.exports = {
  job_types: {
    getAll: function() {
      return knex('job_types')
    }
  }
}