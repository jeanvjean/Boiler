import amqp from 'amqplib/callback_api';
import Mailer from '../../services/service.email';
import config from '../setup';

export const SendEmailQueue = (channelName) => {
  amqp.connect(config.BROKER_URL, (err, conn) => {
    if (err) { throw err; }
    conn.createChannel((e, channel) => {
      if (e) { throw e; }
      const QUEUE = channelName;
      channel.assertQueue(QUEUE);
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
