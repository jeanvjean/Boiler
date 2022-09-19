import { Router } from 'express';
import { catchErrors } from '../../lib/http/lib.http.errorhandler';
import * as Controller from '../controllers/controller.hospital';
import * as Middleware from '../middlewares/middleware.hospital';
import Model from '../middlewares/middleware.model';
import * as upload from '../../config/uploader';

const router = Router();

router.post(
  '/',
  upload.upload,
  catchErrors(Middleware.decodeCsv),
  catchErrors(Middleware.fetchHospitalList),
  catchErrors(Middleware.compareHospitalRecords),
  catchErrors(Middleware.getHospitalCustomers),
  // catchErrors(Middleware.sendCustomersEmail),
  catchErrors(Middleware.removeHospitals),
  catchErrors(Middleware.addHospitals),
  catchErrors(Controller.hospitalUpdated),
);

export default router;
