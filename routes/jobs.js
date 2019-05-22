const express = require('express');

const router = express.Router();
const queries = require('./../db/queries');

router.get('/jobs', (req, res) => {
  queries.jobs.getAll()
  .then(jobs => {
    res.json(jobs);
  })
});

router.post('/jobs', (req, res) => {
  console.log(req.body);
  queries.jobs.create(req.body)
  .then(result => {
    res.send(result);
  })
});

module.exports = router;