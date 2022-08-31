import { unlinkSync } from 'fs-extra';
import { logger } from '../../config/logger';
import enums from '../../lib/enums';
import ApiResponse from '../../lib/http/lib.http.response';

export const hospitalUpdated = async(req, res) => {
  const { files } = req;
  logger.log('successfully created branch', 'controller.branch');
  unlinkSync(files[0].path);
  return ApiResponse.success(res, enums.RESOURCE_UPDATED('hospital list'), enums.HTTP_OK);
};
