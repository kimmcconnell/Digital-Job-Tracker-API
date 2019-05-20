// const { db, TABLES } = require('../db');

// const knex = require (`knex`) ({
//   client: 'mysql',
//   connection: {
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'kanban_local'
//   }
// })

// exports.createLane = function(title) {
//   return knex(TABLES.LANES).insert({'title': title}).select('*');
// }


// exports.createLane = function(title) {
//   return db.insert({ title }).into(TABLES.LANES).select('*');
// }