const knex = require('./db');


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
  },

  jobs: {
    getAll: function() {
      return knex('jobs')
    },
    getOne: function(id) {
      return knex('jobs').where('id', id).first();
    },
    create: async function(job) {
      console.log("on create", job)
      try {
        await knex('jobs').insert(job);
      } catch (e) {
        console.log(e);
        next (e)
      }
    }
  },

  lanes: {
    getAll: function() {
      return knex('lanes')
    },
    getOne: function(id) {
      return knex('lanes').where('id', id).first();
    },
    create: async function(lane) {
      console.log("on create", lane)
      try {
        await knex('lanes').insert(lane);
      } catch (e) {
        console.log(e);
        next (e)
      }
    }
  }
}