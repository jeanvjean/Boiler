import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashData = (data) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashed = bcrypt.hashSync(data, salt);
  if (hashed && salt) {
    return { hashed, salt };
  }
  return false;
};

export const compareData = (data, hashed) => {
  const isValid = bcrypt.compareSync(data, hashed);
  return !!isValid;
};
