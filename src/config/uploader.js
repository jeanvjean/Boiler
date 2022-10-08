import AWS from 'aws-sdk';
import multer from 'multer';
import config from './setup';

export const upload = multer({ dest: './temp/', limits: { fieldSize: 25 * 1024 * 1024 } }).any('file');

export const S3 = AWS.config.update({
  region: 'eu-west-1',
  accessKeyId: config.AWS_API_KEY,
  secretAccessKey: config.SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
});
