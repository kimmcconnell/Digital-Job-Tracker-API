// this is where db requests pertaining to jobs_types will go

const express = require('express');

const router = express.Router();
const queries = require('./../db/queries');

router.get('/job_types', (req, res) => {
  queries.job_types.getAll()
  .then(job_types => {
    res.json(job_types);
  })
});



router.get('/job_types/:id', (req, res) => {
  queries.job_types.getOne(req.params.id)
  .then(job_types => {
    res.json(job_types)
  })
});

router.post('/job_types', (req, res) => {
  console.log(req.body);
  queries.job_types.create(req.body)
  .then(result => {
    res.send(result);
  })
});


module.exports = router;

