import amqp from 'amqplib/callback_api';
import { SendEmailQueue, SendSmsQueue } from './consumer';
import config from '../setup';

console.log(`amqp://${config.BROKER_USER}:${config.BROKER_PASSWORD}@${config.BROKER_URL}:${config.BROKER_PORT}`);

export const SendEmailConsumer = (message, channelName) => {
  amqp.connect(`amqp://${config.BROKER_USER}:${config.BROKER_PASSWORD}@${config.BROKER_URL}:${config.BROKER_PORT}`, (err, conn) => {
    if (err) { throw err; }
    conn.createChannel((e, channel) => {
      if (e) { throw e; }
      const QUEUE = channelName;
      channel.assertQueue(QUEUE);
      channel.sendToQueue(QUEUE, Buffer.from(message.message));
      SendEmailQueue(QUEUE);
    });
  });
};

export const SendSmsConsumer = (message, channelName) => {
  amqp.connect(`amqp://${config.BROKER_USER}:${config.BROKER_PASSWORD}@${config.BROKER_URL}:${config.BROKER_PORT}`, (err, conn) => {
    if (err) { throw err; }
    conn.createChannel((e, channel) => {
      if (e) { throw e; }
      const QUEUE = channelName;
      channel.assertQueue(QUEUE);
      channel.sendToQueue(QUEUE, Buffer.from(message));
      SendSmsQueue(QUEUE);
    });
  });
};
