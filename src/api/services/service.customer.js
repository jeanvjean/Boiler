import DB from '../../services/service.db';
import * as CustomerQuery from '../../lib/queries/lib.query.customer';

export const getCustomers = payload => DB.transact(CustomerQuery.getCustomers, payload);
export const customerCount = payload => DB.transact(CustomerQuery.customerCount, payload);
export const getAllCustomers = payload => DB.transact(CustomerQuery.getAllCustomers, payload);

export const customers = async data => {
  const { page, per_page, search } = data;
  const searchParams = search ? `%${search}%` : undefined;
  let result;
  if (page && per_page) {
    const offset = (+page - 1) * +per_page;
    const [ customer, [ total ] ] = await Promise.all([
      await getCustomers([ offset, per_page, searchParams ]),
      await customerCount([]),
    ]);
    result = {
      customer,
      total: total.total,
      per_page,
    };
    return result;
  }
  result = await getAllCustomers([ searchParams ]);
  return result;
};
