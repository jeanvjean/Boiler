import { Router } from 'express';
import * as MessageController from '../controllers/controller.message';
import { catchErrors } from '../../lib/http/lib.http.errorhandler';

const router = Router();

router.post(
  '/send-message',
  catchErrors(MessageController.sendEmail),
);

export default router;
