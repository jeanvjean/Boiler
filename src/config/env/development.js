import 'dotenv/config';

const {
  DEV_DATABASE_USER,
  DEV_DATABASE_PASSWORD,
  DEV_DATABASE_HOST,
  DEV_DATABASE_NAME,
  DEV_DATABASE_PORT,
  DEV_DATABASE_MAX_CONNECTIONS,
  DEV_PAPERTRAIL_PORT,
  DEV_PAPERTRAIL_HOST,
  DEBUG,
  DEV_TERMII_API_KEY,
  DEV_TERMII_SENDER_ID,
  DEV_TERMII_URL,
  DEV_SENDGRID_APIKEY,
  DEV_EMAIL_SENDER,
  DEV_EMAIL_SERVICE,
  DEV_FRONTEND_INSURANCE_URL,
} = process.env;

export default {
  NODE_ENV: 'development',
  DEBUG,
  DATABASE_USER: DEV_DATABASE_USER,
  DATABASE_PASSWORD: DEV_DATABASE_PASSWORD,
  DATABASE_HOST: DEV_DATABASE_HOST,
  DATABASE_NAME: DEV_DATABASE_NAME,
  DATABASE_PORT: DEV_DATABASE_PORT,
  DATABASE_MAX_CONNECTIONS: DEV_DATABASE_MAX_CONNECTIONS,
  PAPERTRAIL_PORT: DEV_PAPERTRAIL_PORT,
  PAPERTRAIL_HOST: DEV_PAPERTRAIL_HOST,
  EMAIL_SENDER_SERVICE: DEV_EMAIL_SERVICE,
  EMAIL_SENDER_KEY: DEV_SENDGRID_APIKEY,
  EMAIL_SENDER: DEV_EMAIL_SENDER,
  SMS_API_KEY: DEV_TERMII_API_KEY,
  SMS_SENDER_ID: DEV_TERMII_SENDER_ID,
  SMS_SENDER_URL: DEV_TERMII_URL,
  INSURANCE_URL: DEV_FRONTEND_INSURANCE_URL,
};
