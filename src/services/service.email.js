import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-sendgrid-transport';
import config from '../config/setup';
import { commonTemplate } from '../lib/templates/lib.template.common';

const MailService = async({
  subject, type, data, bc, cc, attachment, template, from, sender,
}) => {
  const transporter = nodemailer.createTransport(smtpTransport({
    service: `${config.EMAIL_SENDER_SERVICE}`,
    port: 587,
    secure: false,
    auth: {
      api_key: `${config.EMAIL_SENDER_KEY}`,
    },
  }));

  const mailOptions = {
    from: sender === 'smedan' ? `${from} <${config.EMAIL_SENDER_SMEDAN}>` : `${from} <${config.EMAIL_SENDER}>`,
    bc,
    cc,
    to: data.email,
    subject,
    html: type === 'general' ? commonTemplate(type, data, template) : commonTemplate(type, data),
    attachments: attachment,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`sent using ${config.EMAIL_SENDER}`);
    }
  });
};

export default MailService;
