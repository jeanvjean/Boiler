import DB from '../../services/service.db';
import * as HospitalQuery from '../../lib/queries/lib.query.hospital';

export const fetchHospitals = payload => DB.transact(HospitalQuery.fetchHospitals, [ ...payload ]);
export const getUsers = payload => DB.transact(HospitalQuery.getUsers, [ ...payload ]);
export const removeHospital = payload => DB.transact(HospitalQuery.removeHospital, [ ...payload ]);
export const addHospitals = payload => DB.transact(HospitalQuery.addHospitals, [ ...payload ]);
export const getHospital = payload => DB.transact(HospitalQuery.getHospital, [ payload ]);
export const getCustomers = payload => DB.transact(HospitalQuery.getCustomers, [ payload ]);
