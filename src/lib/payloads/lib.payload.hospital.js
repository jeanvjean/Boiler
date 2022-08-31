import * as Helper from '../utils/lib.helpers';

export const createHospital = (data) => [
  data.name,
  Helper.genUniqueCode(data.name),
  data.state_id,
  data.full_address,
  data.local_government,
  data.city,
  data.added_by,
];
