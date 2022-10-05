import { Router } from 'express';
import * as MessageController from '../controllers/controller.message';
import { catchErrors } from '../../lib/http/lib.http.errorhandler';
import * as HospitalMiddleware from '../middlewares/middleware.hospital';
import * as MessageMiddleware from '../middlewares/middleware.message';
import * as upload from '../../config/uploader';

const router = Router();

router.post(
  '/send-message',
  upload.upload,
  catchErrors(HospitalMiddleware.decodeCsv),
  catchErrors(MessageController.sendEmail),
);

router.get(
  '/count',
  catchErrors(MessageMiddleware.getIpAddress),
  catchErrors(MessageMiddleware.getEngagementRecord),
  catchErrors(MessageMiddleware.getEngagementRecords),
  catchErrors(MessageController.countVisits),
);

export default router;
