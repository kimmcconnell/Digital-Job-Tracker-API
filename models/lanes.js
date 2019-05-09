import { db, TABLES } from '../db';

exports.createLane = title => {
  return db.insert({ title }).into(TABLES.LANES).returning('*');
}