import ApiResponse from './lib.http.response';
import enums from '../enums';
import { logger } from '../../config/logger';

const { MSG_ROUTE_DOES_NOT_EXIST, HTTP_NOT_FOUND } = enums;

// eslint-disable-next-line no-unused-vars
export const errorHandler = (error, req, res, next) => {
  const validCode = [ 200, 201, 400, 401, 403, 404, 409, 410, 422, 429, 554, 500, 503 ];
  let errorCode = error.code || 500;
  if (!validCode.includes(errorCode)) {
    errorCode = 500;
  }
  return ApiResponse.error(
    res,
    error,
    errorCode,
    error.label,
  );
};

export const catchErrors = fn => function(req, res, ...args) {
  return fn(req, res, ...args).catch(error => {
    logger.error(error, `${fn.name}`);
    res.status(400).json({
      status: false,
      errors: error.errors || error.message,
    });
  });
};

export const apiNotFound = (req, res) => ApiResponse.error(res, MSG_ROUTE_DOES_NOT_EXIST, HTTP_NOT_FOUND);
