import geoIp from 'request-ip';
import ApiResponse from '../../lib/http/lib.http.response';
import * as MessageService from '../services/service.message';

export const getIpAddress = async(req, res, next) => {
  req.client_ip = geoIp.getClientIp(req);
  return next();
};

export const getEngagementRecord = async(req, res, next) => {
  const { client_ip } = req;
  const getClientEngage = await MessageService.getSingleEngagement({ client_ip });
  req.engagement = getClientEngage;
  return next();
};

export const getEngagementRecords = async(req, res, next) => {
  const data = await MessageService.getEngagements({});
  req.total_count = data.length;
  return next();
};
