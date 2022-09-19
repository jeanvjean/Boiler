import Mailer from '../../services/service.email';
import * as Brocker from '../../config/brockers/sender';

export const sendEmail = async(req, res) => {
  const { body: { message } } = req;
  const sendMessage = JSON.parse(message);
  sendMessage.map(msg => Mailer({
    subject: msg.subject,
    type: msg.type || 'general',
    data: msg.data,
    bcc: msg.bcc,
    cc: msg.cc,
    attachment: msg.attachment,
    template: msg.template,
  }));
};
