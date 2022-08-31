import enums from '../../lib/enums';
import ApiResponse from '../../lib/http/lib.http.response';
import * as UserService from '../services/service.user';
import { logger } from '../../config/logger';
import * as UserPayload from '../../lib/payloads/lib.payload.user';

export const createUserController = async(req, res) => {
  const payload = UserPayload.createUserAccount({ ...req.body, ...req.userPassword });
  const [ user ] = await UserService.createUser(payload);
  logger.info('Successfully created a user record in the DB', 'controller.controller.user');
  return ApiResponse.success(res, enums.RESOURCE_CREATED('User'), enums.HTTP_CREATED, user);
};
