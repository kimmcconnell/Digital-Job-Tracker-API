const express = require('express');

const router = express.Router();
const queries = require('./../db/queries');

router.get('/jobs', (req, res) => {
  queries.jobs.getAll()
  .then(jobs => {
    res.json(jobs);
  })
});

module.exports = router;