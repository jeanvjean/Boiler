import DB from '../../services/service.db';
import * as MessageQuery from '../../lib/queries/lib.query.message';
import { fbDb } from '../../config/db';

const myDb = fbDb.collection('Engagement');

export const createData = async payload => {
  const saveData = await myDb.doc(`${payload.ip_address}`).set({ ...payload });
  return 'done';
};

export const getEngagements = async payload => {
  const data = await myDb.get();
  const res = [];
  data.forEach(doc => {
    res.push(doc.data());
  });
  return res;
};

export const getSingleEngagement = async payload => {
  const data = await myDb.doc(`${payload.client_ip}`);
  const resp = await data.get();
  return resp.data();
};

export const updateEngagementData = async payload => {
  const data = await myDb.doc(`${payload.ip_address}`);
  await data.update({ ...payload });
  return 'done';
};
