const { assert } = require('chai');
const { db, TABLES } = require('../db');
const { createLane } = require ('../models/lanes');
// const { jobs } = require ('../models/jobs');

const laneTitle = 'new lane';
// const jobTitle = 'new job';

describe('db models', () => {
  
  afterEach(() => {
    return db(TABLES.LANES_JOBS).del()
      .then(() => db(TABLES.LANES).del())
      .then(() => db(TABLES.JOBS).del());
  });

  it('creates a new lane', () => {
    return createLane(laneTitle)
      .then(([result]) => {
        assert.equal(result.title, laneTitle);
        return db.select('*').from(TABLES.LANES);
      }).then(([result]) => {
        assert.equal(result.title, laneTitle);
      })
  });

  it('should return first charachter of the string', function () {
      assert.equal("Hello".charAt(0), 'H');
  });

});