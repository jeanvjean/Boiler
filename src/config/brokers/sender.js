import amqp from 'amqplib/callback_api';
import { SendEmailQueue } from './consumer';

export const SendEmailConsumer = (message, channelName) => {
  amqp.connect('amqp://localhost', (err, conn) => {
    if (err) { throw err; }
    conn.createChannel((e, channel) => {
      if (e) { throw e; }
      const QUEUE = channelName;
      channel.assertQueue(QUEUE);
      channel.sendToQueue(QUEUE, Buffer.from(message.message));
      SendEmailQueue(QUEUE);
      // channel.ack();
    });
  });
};
