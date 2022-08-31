import { logger } from '../../config/logger';
import enums from '../../lib/enums';
import ApiResponse from '../../lib/http/lib.http.response';
import Utils from '../../lib/utils';
import * as UserService from '../services/service.user';

export const getUserAccount = () => async(req, res, next) => {
  const user = await UserService.getUser([ req.body.email ]);
  logger.info('checking the database for any record of the specified account', 'middlewares.middleware.user.js');
  if (user) {
    logger.info('decodes that this account already exists', 'middlewares.middleware.user.js');
    return ApiResponse.error(res, enums.RESOURCE_EXISTS('Account'), enums.HTTP_BAD_REQUEST, enums.GET_USER_ACCOUNT_MIDDLEWARE);
  }
  return next();
};

export const encryptUserPassword = async(req, res, next) => {
  const payload = Utils.generateUniquePassword() || req.body.password;
  const hashedPassword = Utils.hashData(payload.trim());
  logger.info('encrypting the password payload', 'middlewares.middleware.user.js');
  req.userPassword = hashedPassword;
  return next();
};
