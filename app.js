const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const job_types = require('./routes/job_types');

app.use(bodyParser.urlencoded ({
  extended: true
}));
app.use(bodyParser.json({
  limit: "8mb",
}));


app.use(job_types);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// app.get('/job_types', async (req, res) => {
//     try {
//       let data = await knex('job_types');
//       res.json(data);
//       console.log(data);
//     } catch (e) {
//       console.log(e);
//     }
//   });