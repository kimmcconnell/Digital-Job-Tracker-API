const express = require('express');

const router = express.Router();
const queries = require('./../db/queries');

router.get('/jobs', (req, res) => {
  queries.jobs.getAll()
  .then(jobs => {
    res.json(jobs);
  })
});

router.get('/jobs/:id', (req, res) => {
  queries.jobs.getOne(req.params.id)
  .then(jobs => {
    res.json(jobs)
  })
});

router.post('/jobs', (req, res) => {
  console.log(req.body);
  queries.jobs.create(req.body)
  .then(result => {
    res.send(result);
  })
});

router.put('/jobs/:id', (req, res) => {
  queries.jobs.update(req.params.id, req.body)
  .then(status => {
    res.send(status);
  })
});

router.delete('/jobs/:id', (req, res) => {
  console.log("in jobs route")
  queries.jobs.delete(req.params.id)
  .then(result => {
    res.json(result);
  })
})


module.exports = router;