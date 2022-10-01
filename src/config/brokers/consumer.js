/* eslint-disable max-len */
import amqp from 'amqplib/callback_api';
import Mailer from '../../services/service.email';
import * as SmsService from '../../services/service.sms';
import config from '../setup';
import * as Helper from '../../lib/utils/lib.helpers';

export const SendEmailQueue = (channelName) => {
  amqp.connect(`amqp://${config.BROKER_USER}:${config.BROKER_PASSWORD}@${config.BROKER_URL}`, (err, conn) => {
    if (err) { throw err; }
    conn.createChannel((e, channel) => {
      if (e) { throw e; }
      const QUEUE = channelName;
      channel.assertQueue(QUEUE, { durable: true });
      channel.consume(QUEUE, (msg) => {
        const { content } = msg;
        const sendMessage = JSON.parse(content.toString());
        const {
          subject, type, data, bcc, cc, attachment, template, from,
        } = sendMessage;
        data.map(msgs => Mailer({
          subject,
          type: type || 'general',
          data: msgs,
          bcc,
          cc,
          attachment,
          template,
          from,
        }));
      }, {
        noAck: true,
      });
    });
  });
};

export const SendSmsQueue = (channelName) => {
  amqp.connect(`amqp://${config.BROKER_USER}:${config.BROKER_PASSWORD}@${config.BROKER_URL}`, (err, conn) => {
    if (err) { throw err; }
    conn.createChannel((e, channel) => {
      if (e) { throw e; }
      const QUEUE = channelName;
      channel.assertQueue(QUEUE, { durable: true });
      channel.consume(QUEUE, (msg) => {
        const { content } = msg;
        const sendMessage = JSON.parse(content.toString());
        sendMessage.map(async user => {
          const {
            name, email, phone_number, policy_number, hospital,
          } = user;
          const sms = `Hello ${name}\nCongratulations, you have just received free health insurance valid for 6 months, courtesy of PayCentre and Casava.\nGet treated for FREE at ${hospital}. Your Policy number is ${policy_number}. Click: https://csv.ng/IhNIb for more info.\nThe policy document will be sent to your email: ${email}, you may check your promotions or spam folder if you can't find it.\nCall us at 07025004444 for more info.`;
          const message = {
            message: sms,
            to: await Helper.parsePhoneNumberToStandard(phone_number),
          };
          return SmsService.sendSMS(message);
        });
      }, {
        noAck: true,
      });
    });
  });
};
