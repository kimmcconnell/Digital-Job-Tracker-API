import { db, TABLES } from '../db';

exports.createCategory = title => {
  return db.insert({ title }).into(TABLES.JOBS).returning('*');
}

exports.attachJobLane = (jobId, laneId) => {
  return db.insert({ job_id: jobId, lane_id: laneId }).into(TABLES.LANES_JOBS).returning('*');
}