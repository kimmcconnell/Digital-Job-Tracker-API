
// add created_at and updated_at times for ALL data

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(`lanes`, function(table){
      table.increments('id').primary();
      table.string('title');
    }),

    // jobs have status feild that shows where the job is
    knex.schema.createTable(`job_types`, function(table){
      table.increments('id').primary();
      table.string('title');
      table.string('description');
      // descirption needs to be longer
    }),
    knex.schema.createTable('lanes_job_types', function(table){
      table.increments('id').primary();
      table.integer('lane_id').references('lanes.id');
      table.integer('job_type_id').references('job_types.id');
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
