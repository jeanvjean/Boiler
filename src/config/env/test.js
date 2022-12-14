import 'dotenv/config';

const {
  TEST_DATABASE_USER,
  TEST_DATABASE_PASSWORD,
  TEST_DATABASE_HOST,
  TEST_DATABASE_NAME,
  TEST_DATABASE_PORT,
  TEST_DATABASE_MAX_CONNECTIONS,
  DEBUG,
  TEST_PAPERTRAIL_PORT,
  TEST_PAPERTRAIL_HOST,
} = process.env;

export default {
  NODE_ENV: 'test',
  DATABASE_USER: TEST_DATABASE_USER,
  DATABASE_PASSWORD: TEST_DATABASE_PASSWORD,
  DATABASE_HOST: TEST_DATABASE_HOST,
  DATABASE_NAME: TEST_DATABASE_NAME,
  DATABASE_PORT: TEST_DATABASE_PORT,
  DATABASE_MAX_CONNECTIONS: TEST_DATABASE_MAX_CONNECTIONS,
  DEBUG,
  PAPERTRAIL_PORT: TEST_PAPERTRAIL_PORT,
  PAPERTRAIL_HOST: TEST_PAPERTRAIL_HOST,
};
