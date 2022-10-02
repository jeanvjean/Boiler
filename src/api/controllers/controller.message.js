/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import csv from 'csvtojson';
import * as Broker from '../../config/brokers/sender';
import ApiResponse from '../../lib/http/lib.http.response';

export const sendEmail = async(req, res) => {
  const { query: { from, type, sender }, hospitalFiles, body: { message } } = req;
  if (from === 'csv') {
    if (type === 'sms') {
      await Broker.SendSmsPublisher(JSON.stringify(hospitalFiles), 'bulk_sms');
      return ApiResponse.success(res, 'sms(s) sent successfully', 200);
    }
    if (type === 'email') {
      await Broker.SendEmailPublisher(JSON.stringify(hospitalFiles), 'bulk_mail');
      return ApiResponse.success(res, 'email(s) sent successfully', 200);
    }
  }
  if (from === 'raw') {
    if (type === 'sms') {
      await Broker.SendSmsPublisher(req.body, 'bulk_sms');
      return ApiResponse.success(res, 'sms(s) sent successfully', 200);
    }
    if (type === 'email') {
      const msg = JSON.parse(message);
      await Broker.SendEmailPublisher(JSON.stringify({ ...msg, sender }), 'bulk_mail');
      return ApiResponse.success(res, 'email(s) sent successfully', 200);
    }
  }
};

export const sendSms = async(req, res) => {
  await Broker.SendSmsPublisher(res.body, 'bulk_mail');
  return ApiResponse.success(res, 'sms sent successfully', 200);
};
// http://13.40.61.199:8000
