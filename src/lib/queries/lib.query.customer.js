module.exports = {
  getCustomers: `
        SELECT 
            * 
        FROM customers 
        OFFSET $1
        LIMIT $2
    `,

  customerCount: `
        SELECT COUNT(id) total FROM customers
    `,

  getAllCustomers: `
        SELECT 
          *
        FROM customers
    `,
};
