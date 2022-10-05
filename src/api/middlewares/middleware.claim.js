import { logger } from '../../config/logger';
import enums from '../../lib/enums';
import ApiResponse from '../../lib/http/lib.http.response';
import * as ClaimService from '../services/service.claim';

export const getClaims = async(req, res, next) => {
  const claim = await ClaimService.getClaims();
};
