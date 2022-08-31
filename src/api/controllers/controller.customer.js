import enums from '../../lib/enums';
import ApiResponse from '../../lib/http/lib.http.response';
import * as CustomerService from '../services/service.customer';
import { logger } from '../../config/logger';

export const fetchCustomersController = async(req, res) => {
  const { query: { page, per_page, search } } = req;
  const pageOptions = {
    page,
    per_page,
    search,
  };
  const customers = await CustomerService.customers(pageOptions);
  logger.info('Fetching customers from the db', 'controller.controller.role');
  return ApiResponse.success(res, enums.FETCH_ROLES, enums.HTTP_OK, customers);
};
