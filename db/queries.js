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
      try {
        let id = await knex('keg').insert({
          "title": job_type.title,
          "desciption": job_type.desciption
        })
        res.json({
          id: id[0],
          title,
          desciption,
        })
      } catch (e) {
        console.log(e);
        next (e)
      }
    }
  }
}
