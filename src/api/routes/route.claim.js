import { Router } from 'express';
import { catchErrors } from '../../lib/http/lib.http.errorhandler';
import * as ClaimsMiddleware from '../middlewares/middleware.claim';

const router = Router();

router.get(
  '/',
  catchErrors(ClaimsMiddleware.getClaims),
);

export default router;
