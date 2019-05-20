const knex = require('./db');
// var db  = require('./db');

module.exports = {
  job_types: {
    getAll: function() {
      return knex('job_types')
    },
    getOne: function(id) {
      return knex('job_types').where('id', id).first();
    },
    create: async function(job_type) {
      console.log("on create", job_type)
      try {
        await knex('job_types').insert(job_type);
      } catch (e) {
        console.log(e);
        next (e)
      }
    }
  }
}
