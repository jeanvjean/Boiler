module.exports = {
  fetchHospitals: `
    SELECT 
      *
    FROM hospitals
  `,

  getUsers: `
    SELECT * FROM customers WHERE hospital_id = $1
  `,

  getCustomers: `
    SELECT * FROM customers WHERE hospital_id != NULL
  `,

  removeHospital: `
    DELETE FROM hospitals WHERE id = $1
  `,

  addHospitals: `
    INSERT INTO hospitals(
      name,
      slug,
      state_id,
      full_address,
      local_government,
      city,
      added_by
    )
    VALUES($1, $2, $3, $4, $5, $6, $7)
  `,

  getHospital: `
      SELECT * FROM hospitals WHERE slug = $1
  `,
};
