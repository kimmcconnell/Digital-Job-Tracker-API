const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

const job_types = require('./routes/job_types');
const jobs = require('./routes/jobs');
const lanes = require('./routes/lanes');

app.use(cors());

app.use(bodyParser.urlencoded ({
  extended: true
}));
app.use(bodyParser.json({
  limit: "8mb",
}));


app.use(jobs);

app.use(lanes);

app.use(job_types);


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


// app.get('/jobs', async (req, res) => {
//     try {
//       let data = await knex('jobs');
//       res.json(data);
//       console.log(data);
//     } catch (e) {
//       console.log(e);
//     }
//   });