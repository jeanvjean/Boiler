import joi from 'joi';

export const positiveNumberCheck = (param, min = 1, max = 10000000000) => joi
  .number()
  .required()
  .min(min)
  .max(max)
  .messages({
    'any.required': `${param} is a required field`,
    'number.base': `${param} must be a number`,
    'number.empty': `${param} cannot be an empty field`,
    'number.min': `${param} can not be lesser than ${min}`,
    'number.max': `${param} can not be greater than ${max}`,
  });

export const numberCheck = (param) => joi
  .number()
  .required()
  .messages({
    'any.required': `${param} is a required field`,
    'number.base': `${param} must be a number`,
    'number.empty': `${param} cannot be an empty field`,
  });

export const stringCheck = (param, min = 1, max = 1000000000) => joi
  .string()
  .required()
  .trim()
  .min(min)
  .max(max)
  .messages({
    'any.required': `${param} is a required field`,
    'string.max': `${param} can not be greater than ${max} characters`,
    'string.min': `${param} can not be lesser than ${min} characters`,
    'string.base': `${param} must be a string`,
    'string.empty': `${param} cannot be an empty field`,
  });

export const dateCheck = (param) => joi
  .date()
  .required()
  .messages({
    'any.required': `${param} is a required field`,
    'date.base': `${param} must be a correct date`,
    'string.empty': `${param} cannot be an empty field`,
  });

export const passwordCheck = () => joi.string().trim().required().min(7)
  .messages({
    'string.base': 'Password must be a string',
    'string.empty': 'Password field cannot be an empty field',
    'any.required': 'Password field is required',
    'string.min': 'Password can not be less than 7 characters',
  });

export const editStringCheck = (param, min = 1, max = 120000000000) => joi
  .string()
  .min(min)
  .max(max)
  .trim()
  .empty()
  .allow(null)
  .messages({
    'string.base': `${param}  must be a string`,
    'string.empty': `${param} cannot be an empty field`,
    'string.min': `${param} can not be less than ${min} characters`,
    'string.max': `${param} can not be more than ${max} characters`,
  });

export const editNumberCheck = (param) => joi.number().allow(null).messages({
  'number.base': `${param}  must be a number`,
});

export const phoneNumberCheck = () => joi.string().pattern(new RegExp('^[0-9]{11}$')).required().messages({
  'string.pattern.base':
        'Phone Number must be 11 digits',
  'string.empty': 'Phone Number must not be an empty field',
  'any.required': 'Phone Number is a required field',
});

export const editPhoneCheck = () => joi.string().pattern(new RegExp('^[0-9]{11}$')).messages({
  'string.pattern.base':
        'Phone Number must be 11 digits',
  'string.empty': 'Phone Number must not be an empty field',
});

export const enumCheck = (fields, param) => joi
  .string()
  .required()
  .valid(...fields)
  .messages({
    'string.empty': `${param} must not be an empty field`,
    'any.required': `${param} is a required field`,
    'any.only': `Please enter a valid ${param}`,
  });

export const editEnumCheck = (fields, param) => joi
  .string()
  .valid(...fields)
  .messages({
    'string.empty': `${param} must not be an empty field`,
    'any.only': `Please enter a valid ${param}`,
  });

export const enumArrayCheck = (fields, param) => joi
  .array()
  .required()
  .items(joi.string().valid(...fields))
  .messages({
    'string.empty': `${param} must not be an empty field`,
    'any.required': `${param} is a required field`,
    'any.only': `Please enter a valid ${param}, it must be one of the following: ${fields.join(', ')}`,
  });

export const editEnumArrayCheck = (fields, param) => joi
  .array()
  .items(joi.string().valid(...fields))
  .messages({
    'string.empty': `${param} must not be an empty field`,
    'any.only': `Please enter a valid ${param}, it must be one of the following: ${fields.join(', ')}`,
  });

export const arrayStringCheck = (param) => joi
  .array()
  .items(joi.string())
  .required()
  .messages({
    'array.empty': `${param} is a required field`,
    'array.base': `${param} must be a valid array`,
    'any.required': `${param} cannot be an empty field`,
  });

export const editArrayStringCheck = (param) => joi
  .array()
  .items(joi.string())
  .messages({
    'array.empty': `${param} is a required field`,
    'array.base': `${param} must be a valid array`,
  });

export const editArrayObjectCheck = (param) => joi
  .array()
  .items(joi.object())
  .messages({
    'array.empty': `${param} is a required field`,
    'array.base': `${param} must be a valid array`,
    'any.required': `${param} cannot be an empty field`,
  });

export const editDateCheck = (param) => joi.date().messages({
  'any.required': `${param} is a required field`,
  'date.base': `${param} must be a correct date`,
  'string.empty': `${param} cannot be an empty field`,
});

export const emailCheck = () => joi.string().email().required().messages({
  'any.required': 'Email is a required field',
  'string.email': 'Email is not valid',
  'string.empty': 'Email cannot be an empty field',
});

export const regexNumberCheck = (param) => joi
  .string()
  .required()
  .pattern(new RegExp('^[0-9]{10,14}$'))
  .messages({
    'string.pattern.base': `${param} must be a number between 11 and 14 digits`,
    'string.empty': `${param} must not be an empty field`,
    'any.required': `${param}  is a required field`,
  });

export const editRegexNumberCheck = (param) => joi
  .string()
  .pattern(new RegExp('^[0-9]{10,14}$'))
  .messages({
    'string.pattern.base': `${param} must be a number between 11 and 14 digits`,
    'string.empty': `${param} must not be an empty field`,
    'any.required': `${param}  is a required field`,
  });

export const editEmailCheck = () => joi.string().email().messages({
  'string.email': 'Email is not valid',
  'string.empty': 'Email cannot be an empty field',
});
