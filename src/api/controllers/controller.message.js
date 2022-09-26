import * as Broker from '../../config/brokers/sender';
import ApiResponse from '../../lib/http/lib.http.response';

export const sendEmail = async(req, res) => {
  await Broker.SendEmailConsumer(req.body, 'bulk_mail');
  return ApiResponse.success(res, 'emails sent successfully', 200);
};
// http://13.40.61.199:8000
