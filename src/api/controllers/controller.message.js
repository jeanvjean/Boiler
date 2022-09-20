import Mailer from '../../services/service.email';
import * as Brocker from '../../config/brockers/sender';
import ApiResponse from '../../lib/http/lib.http.response';

export const sendEmail = async(req, res) => {
  const { body: { message } } = req;
  const sendMessage = JSON.parse(message);
  const {
    subject, type, data, bcc, cc, attachment, template,
  } = sendMessage;
  data.map(msg => Mailer({
    subject,
    type: type || 'general',
    data: msg,
    bcc,
    cc,
    attachment,
    template,
  }));
  return ApiResponse.success(res, 'emails sent successfully', 200);
};
