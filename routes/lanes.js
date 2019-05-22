const express = require('express');

const router = express.Router();
const queries = require('./../db/queries');

router.get('/lanes', (req, res) => {
	queries.lanes.getAll()
	.then(lanes => {
			res.json(lanes);
	})
});
  
  module.exports = router;