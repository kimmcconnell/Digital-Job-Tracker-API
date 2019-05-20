const knex = require('knex');

module.exports = {
  job_types: {
    getAll: function() {
      return knex('job_types')
      //can follow with .select('*');
    }
  }
}