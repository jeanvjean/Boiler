import Joi from 'joi';
import * as ValidationHelpers from '../utils/lib.validation.helper';

const {
  stringCheck, emailCheck,
} = ValidationHelpers;

export const createUserSchema = Joi.object({
  first_name: stringCheck('first_name'),
  last_name: stringCheck('last_name'),
  email: emailCheck(),
  branch_id: stringCheck('branch_id'),
  role_id: stringCheck('role_id'),
});
