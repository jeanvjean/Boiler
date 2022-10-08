/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import csv from 'csvtojson';
import { unlinkSync } from 'fs-extra';
import * as Broker from '../../config/brokers/sender';
import ApiResponse from '../../lib/http/lib.http.response';
import * as MessageService from '../services/service.message';

export const sendEmail = async(req, res) => {
  const {
    query: { from, type, sender }, files, hospitalFiles, body: { message },
  } = req;
  console.log({ message });
  // console.log({ d: JSON.parse(message) });
  // return;
  if (from === 'csv') {
    if (type === 'sms') {
      const QUEUE_NAME = `bulk_sms_${Math.random() * 1000}`;
      await Broker.SendSmsPublisher(JSON.stringify(hospitalFiles), QUEUE_NAME);
      return ApiResponse.success(res, 'sms(s) sent successfully', 200);
    }
    if (type === 'email') {
      const QUEUE_NAME = `bulk_email_${Math.random() * 1000}`;
      await Broker.SendEmailPublisher(JSON.stringify(hospitalFiles), QUEUE_NAME);
      return ApiResponse.success(res, 'email(s) sent successfully', 200);
    }
  }
  if (from === 'raw') {
    if (type === 'sms') {
      const QUEUE_NAME = `bulk_sms_${Math.random() * 1000}`;
      await Broker.SendSmsPublisher(req.body, QUEUE_NAME);
      return ApiResponse.success(res, 'sms(s) sent successfully', 200);
    }
    if (type === 'email') {
      const QUEUE_NAME = `bulk_email_${Math.random() * 1000}`;
      const msg = JSON.parse(message);
      await Broker.SendEmailPublisher(JSON.stringify({ ...msg, sender }), QUEUE_NAME);
      // files ? unlinkSync(files[0].path) : undefined;
      return ApiResponse.success(res, 'email(s) sent successfully', 200);
    }
  }
};

export const sendSms = async(req, res) => {
  await Broker.SendSmsPublisher(res.body, 'bulk_mail');
  return ApiResponse.success(res, 'sms sent successfully', 200);
};

export const countVisits = async(req, res) => {
  const {
    query: { type }, client_ip, engagement, total_count,
  } = req;
  if (type === 'count') {
    const count = engagement ? +engagement.visits + 1 : 1;
    let total = total_count;
    if (!engagement) {
      total += 1;
      await MessageService.createData({ ip_address: client_ip, visits: count });
    } else {
      await MessageService.updateEngagementData({ ...engagement, visits: count });
    }
    return ApiResponse.success(res, 'counts', 200, { total_visits: total, ip_visits: count });
  }
  if (type === 'view') {
    return ApiResponse.success(res, 'counts', 200, { total_visits: total_count });
  }
};

// http://13.40.61.199:8000
