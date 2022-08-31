import winston from 'winston';
import { Papertrail } from 'winston-papertrail';
import fse, { existsSync, writeFileSync } from 'fs-extra';
import config from '../setup';

// const wslogger = winston.createLogger({
//   transports: [
//     new Papertrail({
//       host: config.PAPERTRAIL_HOST,
//       port: config.PAPERTRAIL_PORT,
//     }),
//   ],
// });

const log = (value, type, location) => {
  if (process.env.DEBUG) {
    const formatMessage = `${new Date().toGMTString()} [${type}]: ${value}::${location}`;
    return formatMessage;
  }
  return '';
};

const logger = {
  info: (value, location = 'default') => {
    if (process.env.DEBUG === 'true') {
      const errorLog = './error.log';
      if (!existsSync(errorLog)) {
        writeFileSync(errorLog, 'utf-8');
      }
      const logs = fse.readFileSync('./server.log', 'utf-8');
      const logString = log(value, 'INFO', location);
      const write = `${logs}${logString} \n`;
      fse.outputFileSync('./server.log', write);
      // wslogger.info(logString);
      console.info(log(value, 'INFO', location));
    }
  },
  error: (value, location = 'default') => {
    if (process.env.DEBUG === 'true') {
      const errorLog = './error.log';
      if (!existsSync(errorLog)) {
        writeFileSync(errorLog, 'utf-8');
      }
      const logs = fse.readFileSync('./error.log', 'utf-8');
      const logString = log(value, 'ERROR', location);
      const write = `${logs}${logString} \n`;
      fse.outputFileSync('./error.log', write);
      // wslogger.error(logString);
      console.log(log(value, 'ERROR', location));
    }
  },
  log: (value, location = 'default') => {
    if (process.env.DEBUG === 'true') {
      const path = './server.log';
      if (!existsSync(path)) {
        writeFileSync(path, 'utf-8');
      }
      const logs = fse.readFileSync('./server.log', 'utf-8');
      const logString = log(value, 'LOG', location);
      const write = `${logs}${logString} \n`;
      fse.outputFileSync('./server.log', write);
      // wslogger.info(logString);
      console.log(log(value, 'LOG', location));
    }
  },
};

export { logger };
