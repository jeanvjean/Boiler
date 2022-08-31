import { db } from '../config/db';

export const queries = {

};

export default {
  transact: (query, data) => db.any(query, data),
  singleTransaction: (query, data) => db.oneOrNone(query, data),
};
