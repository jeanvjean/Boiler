import Joi from 'joi';
import * as ValidationHelpers from '../utils/lib.validation.helper';

const {
  stringCheck, numberCheck, enumCheck, editNumberCheck, editStringCheck, positiveNumberCheck,
} = ValidationHelpers;

export const createBranch = Joi.object({
  name: stringCheck('name'),
  longitude: numberCheck('longitude'),
  latitude: numberCheck('latitude'),
  branch_type: enumCheck([ 'head_quarters', 'sub_branch' ], 'branch_type'),
  distance: editNumberCheck('distance'),
});

export const fetchBranchesSchema = Joi.object({
  longitude: numberCheck('longitude'),
  latitude: numberCheck('latitude'),
  distance: positiveNumberCheck('distance'),
  per_page: editStringCheck('per_page'),
  page: editStringCheck('page'),
});
