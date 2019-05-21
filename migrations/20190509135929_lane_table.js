
// add created_at and updated_at times for ALL data

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(`lanes`, function(table){
      table.increments('id').primary();
      table.string('name');
      table.string('details');
    }),

    // jobs have status feild that shows where the job is
    knex.schema.createTable(`job_types`, function(table){
      table.increments('id').primary();
      table.string('title');
      table.string('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      // descirption needs to be longer
    }),
    knex.schema.createTable('jobs', function(table){
      table.increments('id').primary();
      table.string('title');
      table.string('description');
      table.integer('job_type').unsigned().references('job_type.id');
      table.integer('lane_id').unsigned().references('lanes.id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
    // knex.schema.createTable('lanes_job_types', function(table){
    //   table.increments('id').primary();
    //   table.integer('lane_id').references('lanes.id');
    //   table.integer('job_type_id').references('job_types.id');
    // })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('lanes'),
    knex.schema.dropTable('job_types'),
    knex.schema.dropTable('jobs'),
    // knex.schema.dropTable('lanes_job_types')
  ]);
};
