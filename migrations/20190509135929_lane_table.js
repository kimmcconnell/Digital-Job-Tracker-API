
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(`lanes`, function(table){
      table.increments('id').primary();
      table.string('title');
    }),
    knex.schema.createTable(`jobs`, function(table){
      table.increments('id').primary();
      table.string('title');
      table.string('desciption');
    }),
    knex.schema.createTable('lanes_jobs', function(table){
      table.increments('id').primary();
      table.integer('lane_id').references('lanes.id');
      table.integer('job_id').references('jobs.id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('lanes'),
    knex.schema.dropTable('job_types'),
    knex.schema.dropTable('lanes_job_types')
  ]);
};
