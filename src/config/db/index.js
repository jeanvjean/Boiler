/* eslint-disable no-async-promise-executor */
import 'dotenv/config';
import pgp from 'pg-promise';
import promise from 'bluebird';
import detectPort from 'detect-port';
import config from '../setup';
import { logger } from '../logger';

const admin = require('firebase-admin');

const serviceAccount = require('../../../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const pg = pgp({ promiseLib: promise, noWarnings: true });

const db = pg({
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  database: config.DATABASE_NAME,
  user: config.DATABASE_USER,
  password: config.DATABASE_PASSWORD,
  max: config.DATABASE_MAX_CONNECTIONS,
});

const connection = (app, port) => new Promise(async resolve => {
  port = port || (await detectPort());
  const server = app.listen(port, '0.0.0.0', () => {
    logger.log(`Listening on port ${server.address().port}`);
    const originalClose = server.close.bind(server);
    server.close = () => new Promise(resolveClose => {
      originalClose(resolveClose);
    });
    db
      .connect()
      .then(conn => {
        logger.log(
          `connected to ${conn.client.database} database`,
        );
      })
      .catch(err => {
        logger.log(err, 'err');
      });
  });
  resolve(server);
});

const fbDb = admin.firestore();

export { db, connection, fbDb };
