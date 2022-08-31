/* eslint-disable default-case */
import * as hospital from './lib.template.hospital';

const getTemplate = (type, data) => {
  switch (type) {
  case 'change_hospital': return hospital.change_hospital(data);
  case 'hospital_customers': return hospital.hospital_customers(data);
  }
};

export default getTemplate;
