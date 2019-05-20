// this is where db requests pertaining to jobs_types will go

const express = require('express');

const router = express.Router();

const queries = require('./../db/queries');

router.get('/job_types', (req, res) => {
  queries.job_types.getAll()
  .then(job_types => {
    res.json(job_types)
  })
});

module.exports = router;


  // try {
  //   let job_type = await knex('job_type');
  //   res.json(job_type);
  //   console.log(job_type);
  // } catch (e) {
  //   console.log(e);
  // }