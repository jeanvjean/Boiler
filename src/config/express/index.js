import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import router from '../router';
import { logger } from '../logger';
import { errorHandler } from '../../lib/http/lib.http.errorhandler';
import ApiResponse from '../../lib/http/lib.http.response';
import enums from '../../lib/enums';

const { MSG_ROUTE_DOES_NOT_EXIST, HTTP_NOT_FOUND } = enums;

const expressConfig = app => {
  logger.log('Application starting...');
  app.use(
    urlencoded({
      extended: true,
    }),
  );

  app.use(json({ limit: '200mb' }));
  app.use(cors({ limit: '200mb' }));

  router(app);

  app.get('/', (req, res) => {
    res.send({ message: 'Welcome' });
  });

  /** catch 404 and forward to error handler
   No routes matched? 404. */
  app.use((req, res /* next */) => ApiResponse.error(res, MSG_ROUTE_DOES_NOT_EXIST, HTTP_NOT_FOUND));
  app.use(errorHandler);
};

export default expressConfig;
