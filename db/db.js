var config = require('../knexfile.js');
var env = 'development';

const knex = require(`knex`) ({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'kanban_local'
  }
});

module.exports = knex;


