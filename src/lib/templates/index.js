/* eslint-disable default-case */
import * as hospital from './lib.template.hospital';

const getTemplate = (type, data, template) => {
  switch (type) {
  case 'change_hospital': return hospital.change_hospital(data);
  case 'hospital_customers': return hospital.hospital_customers(data);
  case 'general': return hospital.general_template(data, template);
  }
};

export default getTemplate;
