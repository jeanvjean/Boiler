import { Router } from 'express';
import * as Controller from '../controllers/controller.customer';
import { catchErrors } from '../../lib/http/lib.http.errorhandler';

const router = Router();

router.get(
  '/',
  catchErrors(Controller.fetchCustomersController),
);

export default router;
