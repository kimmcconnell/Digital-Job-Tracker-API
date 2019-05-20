const express = require('express');
const app = express();
const port = 3000;

const knex = require (`knex`) ({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'kanban_local'
  }
});

const job_types = require('./routes/job_types');

app.use(job_types);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

