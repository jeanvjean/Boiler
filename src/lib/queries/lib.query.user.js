module.exports = {
  createUserAccount: `
      INSERT INTO users(
        first_name,
        last_name,
        email,
        branch_id,
        role_id,
        password,
        salt
      )
      VALUES($1, $2, LOWER(TRIM($3)), $4, $5, $6, $7)
      RETURNING first_name, last_name, email, branch_id, role_id`,

  getAccount: `
      SELECT * FROM users WHERE (email = LOWER(TRIM($1)) OR id = $1)
  `,

};
