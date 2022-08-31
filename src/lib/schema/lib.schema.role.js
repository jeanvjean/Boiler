import Joi from 'joi';
import * as ValidationHelpers from '../utils/lib.validation.helper';

const {
  stringCheck, editStringCheck,
} = ValidationHelpers;

export const createRoleSchema = Joi.object({
  name: stringCheck('name'),
  permissions: stringCheck('permissions'),
});

export const updateRoleBodySchema = Joi.object({
  name: editStringCheck('name'),
  permissions: editStringCheck('permissions'),
});

export const fetchRolesSchema = Joi.object({
  page: editStringCheck('page'),
  per_page: editStringCheck('per_page'),
  search: editStringCheck('search'),
});
