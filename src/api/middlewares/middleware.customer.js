import * as CustomerService from '../services/service.customer';

export const fetchCustomers = async(req, res, next) => {
  const customers = await CustomerService.getCustomers();
  console.log({ customers });
};
